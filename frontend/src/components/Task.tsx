import React from 'react';

interface TaskProps {
  task: { id: number; name: string; done: boolean };
  markAsDone: (id: number) => void;
  deleteTask: (id: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, markAsDone, deleteTask }) => {
  return (
    <div style={{ marginBottom: '10px' }}>
      <span style={{ textDecoration: task.done ? 'line-through' : 'none', marginRight: '10px' }}>
        {task.name}
      </span>
      <button onClick={() => markAsDone(task.id)} style={{ marginRight: '10px' }}>Done</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default Task;
