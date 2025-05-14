import ToDoItem from './ToDoItem'

const ToDoList = ({ tasks, toggleComplete, deleteTask, editTask }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p style={{ textAlign: "center", color: "#777" }}>No tasks found.</p>
      ) : (
        tasks.map(task => (
          <ToDoItem
            key={task.id}
            task={task}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  )
}

export default ToDoList
