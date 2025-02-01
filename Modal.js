// Modal.js
import React, { useState, useEffect, useCallback } from 'react';
import { useStore } from './store';

const Modal = ({ task, onClose }) => {
  const [name, setName] = useState(task ? task.name : '');
  const [dueDate, setDueDate] = useState(task ? task.dueDate : '');
  const { addTask, updateTask } = useStore(state => ({
    addTask: state.addTask,
    updateTask: state.updateTask,
  }));

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const handleSave = useCallback(() => {
    if (task) {
      updateTask(task.id, { ...task, name, dueDate });
    } else {
      addTask({ id: Date.now().toString(), name, dueDate });
    }
    onClose();
  }, [name, dueDate, task, addTask, updateTask, onClose]);

  return (
    <div onClick={onClose} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)' }}>
      <div onClick={(e) => e.stopPropagation()} style={{ background: 'white', padding: '20px', margin: '50px auto', width: '300px' }}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Task Name"
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default Modal;
