// TaskList.js
import React, { useEffect, useMemo, useCallback } from 'react';
import { useStore } from './store';
import TaskCard from './TaskCard';
import Pagination from './Pagination';

const TaskList = () => {
  const { tasks, page, pageSize, filter, sort, setPage, setFilter, setSort } = useStore(state => ({
    tasks: state.tasks,
    page: state.page,
    pageSize: state.pageSize,
    filter: state.filter,
    sort: state.sort,
    setPage: state.setPage,
    setFilter: state.setFilter,
    setSort: state.setSort,
  }));

  const filteredTasks = useMemo(() => {
    return [...tasks.values()]
      .filter((task) => task.name.toLowerCase().includes(filter.toLowerCase()))
      .sort((a, b) => {
        if (sort === 'name') return a.name.localeCompare(b.name);
        if (sort === 'dueDate') return new Date(a.dueDate) - new Date(b.dueDate);
        return 0;
      });
  }, [tasks, filter, sort]);

  const paginatedTasks = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredTasks.slice(start, start + pageSize);
  }, [filteredTasks, page, pageSize]);

  const handleSearch = useCallback((e) => {
    setFilter(e.target.value);
  }, [setFilter]);

  const handleSort = useCallback((e) => {
    setSort(e.target.value);
  }, [setSort]);

  return (
    <div>
      <div>
        <input type="text" value={filter} onChange={handleSearch} placeholder="Search tasks..." />
        <select value={sort} onChange={handleSort}>
          <option value="name">Sort by Name</option>
          <option value="dueDate">Sort by Due Date</option>
        </select>
      </div>
      <div>
        {paginatedTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
      <Pagination currentPage={page} totalItems={filteredTasks.length} onPageChange={setPage} />
    </div>
  );
};

export default TaskList;
