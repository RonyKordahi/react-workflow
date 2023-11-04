const Task = ({ task, description, status, markComplete }) => {

    return (
        <div className="bottom">
            <p>Task: {task}</p>
            <p>Description: {description}</p>
            <p>Status: {status}</p>
            {
                status === "Incomplete" && (
                    <button onClick={() => markComplete(task)}>Mark Complete</button>
                )
            }
        </div>
    )
}

export default Task;