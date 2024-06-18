import React from 'react';
import Task from './Task.tsx';


const TaskList: React.FC<TaskListProps> = ({ tasks, markAsDone, deleteTask }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} markAsDone={markAsDone} deleteTask={deleteTask} />
      ))}
    </div>
  );
};

export default TaskList;

interface TaskListProps {
    tasks: { id: number; name: string; done: boolean }[];
    markAsDone: (id: number) => void;
    deleteTask: (id: number) => void;
  }