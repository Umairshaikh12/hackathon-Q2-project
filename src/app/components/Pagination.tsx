interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={handlePrev}
        className="px-4 py-2 bg-gray-300 rounded-md"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      <span className="font-semibold">{currentPage} / {totalPages}</span>
      <button
        onClick={handleNext}
        className="px-4 py-2 bg-gray-300 rounded-md"
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
