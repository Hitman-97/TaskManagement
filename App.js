// App.js
import React, { useState } from 'react';
import { useStore } from './store';
import TaskList from './TaskList';
import Modal from './Modal';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const { tasks } = useStore(state => ({
    tasks: state.tasks,
  }));

  const openModalForAdding = () => {
    setTaskToEdit(null);
    setModalOpen(true);
  };

  const openModalForEditing = (task) => {
    setTaskToEdit(task);
    setModalOpen(true);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <button onClick={openModalForAdding}>Add New Task</button>
      <TaskList />
      {isModalOpen && <Modal task={taskToEdit} onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default App;
