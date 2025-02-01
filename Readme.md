# Task Management App

This is a task management application built using React and Zustand. It allows users to manage tasks with various features like inline editing, pagination, sorting, filtering, and drag-and-drop reordering. It also includes a modal for adding and editing tasks and handles large datasets efficiently.

## Features:
- **Pagination**: Display tasks with pagination for easier navigation.
- **Filtering & Sorting**: Filter tasks by status and search, and sort tasks alphabetically.
- **Click-to-Edit**: Inline editing of task titles.
- **Drag-and-Drop**: Reorder tasks via drag-and-drop.
- **Modal for Task Management**: A modal window for adding and editing tasks.
- **Performance Optimization**: Efficient task management using Zustand and React hooks (`useMemo`, `useCallback`).

## Tech Stack:
- React
- Zustand (for state management)
- react-beautiful-dnd (for drag-and-drop)

## How to Run:
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install


   ** This project is a task management application built with React and Zustand for state management. It allows users to manage tasks through features such as filtering, sorting, pagination, and inline editing. The task data is stored using a `Map` structure in Zustand, with the task email as the unique key for efficient lookups. Key features include dynamic search and status filters, sorting tasks alphabetically, and pagination for handling large datasets (50+ records). Users can also reorder tasks using drag-and-drop functionality via `react-beautiful-dnd`. Tasks can be edited inline with a click-to-edit feature, and a modal window enables task addition and editing. The modal supports closing via the Escape key or clicking outside. Performance optimizations are made using React's `useMemo` and `useCallback` to minimize unnecessary re-renders. This application provides a responsive and efficient task management experience.**
