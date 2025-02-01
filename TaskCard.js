// TaskCard.js
import React, { useState, useRef } from 'react';
import { useStore } from './store';

const TaskCard = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(task.name);
  const { updateTask, deleteTask } = useStore(state => ({
    updateTask: state.updateTask,
    deleteTask: state.deleteTask,
  }));

  const handleSave = () => {
    updateTask(task.id, { ...task, name });
    setIsEditing(false);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData('taskId', task.id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const draggedTaskId = e.dataTransfer.getData('taskId');
    if (draggedTaskId !== task.id) {
      // Logic to reorder tasks goes here.
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ padding: '10px', border: '1px solid black', marginBottom: '10px' }}
    >
      {isEditing ? (
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <span>{task.name}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default TaskCard;
