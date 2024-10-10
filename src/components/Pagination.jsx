import React, { useEffect } from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, left: 0 });
  };

  return (
    <div className="p-4 flex gap-4">
      {pages.map((page, index) => {
        return (
          <button
            className={`text-xl border-2 border-cyan-500 px-4 py-1 cursor-pointer transition-all ${
              page === currentPage
                ? "bg-cyan-500 font-bold text-white"
                : " text-cyan-500"
            }`}
            key={index}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
