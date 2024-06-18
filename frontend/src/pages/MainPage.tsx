import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskList from '../components/TaskList.tsx';
import AddTask from '../components/AddTask.tsx';


const MainPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:3000/tasks');
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const addTask = async (taskName: string) => {
    try {
      const response = await axios.post('http://localhost:3000/tasks', { name: taskName });
      setTasks([...tasks, response.data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const markAsDone = async (taskId: number) => {
    try {
      const response = await axios.patch(`http://localhost:3000/tasks/${taskId}`, { done: true });
      setTasks(tasks.map(task => (task.id === taskId ? response.data : task)));
    } catch (error) {
      console.error('Error marking task as done:', error);
    }
  };

  const deleteTask = async (taskId: number) => {
    try {
      await axios.delete(`http://localhost:3000/tasks/${taskId}`);
      setTasks(tasks.filter(task => task.id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <AddTask addTask={addTask} />
      <TaskList tasks={tasks} markAsDone={markAsDone} deleteTask={deleteTask} />
    </div>
  );
};

export default MainPage;
interface Task {
  id: number;
  name: string;
  done: boolean;
}
