import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskById } from "../services/taskService";
import { useAuth } from "../hooks/useAuth";

const TaskDetails = () => {
  const { id } = useParams();
  const { token } = useAuth();

  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      if (id && token) {
        const data = await getTaskById(id, token);
        setTask(data);
      }
    };

    fetchTask();
  }, [id, token]);

  if (!task) return <p>Loading...</p>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
    </div>
  );
};

export default TaskDetails;