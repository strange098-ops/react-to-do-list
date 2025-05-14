import React, { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'

const App = () => {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState("")
  const [filter, setFilter] = useState("All")
  const addTask = () => {
    if (newTask.trim() === "") return
    const date = new Date()
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text: newTask,
        completed: false,
        timestamp: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) +
          ", " + date.toLocaleDateString()
      }
    ])
    setNewTask("")
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }
  const toggleComplete = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }
  const editTask = (id, newText) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text: newText } : task
    ))
  }
  const filteredTasks = tasks.filter(task => {
    if (filter === "Completed") return task.completed
    if (filter === "Active") return !task.completed
    return true
  })
  return (
    <div className="container">
      <Header />
      <div className="controls">
        <button onClick={addTask}>Add Task</button>
        <select value={filter} onChange={(e) =>setFilter(e.target.value)}>
          <option>All</option>
          <option>Active</option>
          <option>Completed</option>
        </select>
      </div>
      <div className="input-group">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
      </div>
      <ToDoList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  )
}
export default App
