import { useState } from 'react'

const ToDoItem = ({ task, toggleComplete, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(task.text)

  const handleEdit = () => {
    if (isEditing && editText.trim()) {
      editTask(task.id, editText)
    }
    setIsEditing(!isEditing)
  }

  return (
    <div className="todo-item">
      <div className="todo-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleComplete(task.id)}
        />
        <div>
          {isEditing ? (
            <input
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            <div className={`text ${task.completed ? 'completed' : ''}`}>
              {task.text}
            </div>
          )}
          <div className="todo-time">{task.timestamp}</div>
        </div>
      </div>
      <div className="todo-buttons">
        <button onClick={handleEdit}>✏️</button>
        <button onClick={() => deleteTask(task.id)}>🗑️</button>
      </div>
    </div>
  )
}

export default ToDoItem
