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
