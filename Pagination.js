// Pagination.js
import React from 'react';

const Pagination = ({ currentPage, totalItems, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / 10);

  const handlePrevPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>{currentPage} / {totalPages}</span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
