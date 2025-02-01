import create from 'zustand';

const useTaskStore = create((set) => ({
  tasks: new Map(), // store tasks as a Map with email as key
  filters: { search: '', status: 'all' },
  sort: 'asc', // or 'desc'
  currentPage: 1,
  tasksPerPage: 5,
  addTask: (task) => set((state) => {
    const newTasks = new Map(state.tasks);
    newTasks.set(task.email, task);
    return { tasks: newTasks };
  }),
  updateTask: (email, updatedTask) => set((state) => {
    const newTasks = new Map(state.tasks);
    newTasks.set(email, { ...newTasks.get(email), ...updatedTask });
    return { tasks: newTasks };
  }),
  deleteTask: (email) => set((state) => {
    const newTasks = new Map(state.tasks);
    newTasks.delete(email);
    return { tasks: newTasks };
  }),
  setFilters: (filters) => set(() => ({ filters })),
  setSort: (sort) => set(() => ({ sort })),
  setPage: (page) => set(() => ({ currentPage: page })),
}));
export default useTaskStore;
