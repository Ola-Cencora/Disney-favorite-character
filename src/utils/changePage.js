export const goToNextPage = (setCurrentPage, currentPage, totalPages) => {
  setCurrentPage(Math.min(currentPage + 1, totalPages));
};

export const goToPreviousPage = (setCurrentPage, currentPage) => {
  setCurrentPage(Math.max(currentPage - 1, 1));
};

export const goToFirstPage = (setCurrentPage) => {
  setCurrentPage(1);
};

export const goToLastPage = (setCurrentPage, totalPages) => {
  setCurrentPage(totalPages);
};

export const goToPage = (setCurrentPage, pageNumber) => {
  setCurrentPage(pageNumber);
};
