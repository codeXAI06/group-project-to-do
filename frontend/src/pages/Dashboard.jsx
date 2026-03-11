import { useEffect, useState } from "react";
import { getAllTasks, deleteTask } from "../services/taskService";
import { useAuth } from "../hooks/useAuth";
import TaskCard from "../components/TaskCard";

const Dashboard = () => {
  const { token } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = async (id) => {
    try {
      await deleteTask(id, token);
      const updatedTasks = await getAllTasks(token);
      setTasks(updatedTasks);
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  useEffect(() => {
    const loadTasks = async () => {
      if (token) {
        try {
          setLoading(true);
          const data = await getAllTasks(token);
          setTasks(data);
        } catch (error) {
          console.error("Error fetching tasks:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    loadTasks();
  }, [token]);

  return (
    <div>
      <h2>Your Tasks</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
};

export default Dashboard;