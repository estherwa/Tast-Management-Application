import React, { useState, ChangeEvent, FormEvent } from 'react';



const AddTask: React.FC<AddTaskProps> = ({ addTask }) => {
  const [taskName, setTaskName] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName);
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={taskName}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskName(e.target.value)}
        placeholder="Add a new task"
        style={{ padding: '10px', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '10px' }}>Add Task</button>
    </form>
  );
};

export default AddTask;
interface AddTaskProps {
  addTask: (taskName: string) => void;
}