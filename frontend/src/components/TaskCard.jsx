import { Link } from "react-router-dom";

const TaskCard = ({ task, onDelete }) => {
  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <span>Status: {task.status}</span>

      <div>
        <Link to={`/task/${task.id}`}>View</Link>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;