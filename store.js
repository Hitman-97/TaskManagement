// store.js
import create from 'zustand';

const useStore = create((set) => ({
  tasks: new Map(),
  currentTaskId: null,
  page: 1,
  pageSize: 10,
  filter: '',
  sort: 'name', // default sorting by name
  setTasks: (tasks) => set({ tasks }),
  addTask: (task) => set((state) => {
    const newTasks = new Map(state.tasks);
    newTasks.set(task.id, task);
    return { tasks: newTasks };
  }),
  updateTask: (taskId, updatedTask) => set((state) => {
    const newTasks = new Map(state.tasks);
    newTasks.set(taskId, updatedTask);
    return { tasks: newTasks };
  }),
  deleteTask: (taskId) => set((state) => {
    const newTasks = new Map(state.tasks);
    newTasks.delete(taskId);
    return { tasks: newTasks };
  }),
  setPage: (page) => set({ page }),
  setFilter: (filter) => set({ filter }),
  setSort: (sort) => set({ sort }),
}));

export { useStore };
