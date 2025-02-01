import React, { useState, useEffect } from 'react';
import useTaskStore from './TaskStore';

const TaskModal = ({ task, closeModal }) => {
  const { addTask, updateTask } = useTaskStore();
  const [taskData, setTaskData] = useState(task || { title: '', status: 'pending', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({ ...taskData, [name]: value });
  };

  const handleSave = () => {
    if (task) {
      updateTask(taskData.email, taskData);
    } else {
      addTask(taskData);
    }
    closeModal();
  };

  const handleCancel = () => {
    closeModal();
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [closeModal]);

  return (
    <div className="modal">
      <input 
        type="text" 
        name="title" 
        value={taskData.title} 
        onChange={handleChange} 
        placeholder="Task Title"
      />
      <select name="status" value={taskData.status} onChange={handleChange}>
        <option value="pending">Pending</option>
        <option value="completed">Completed</option>
      </select>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default TaskModal;
