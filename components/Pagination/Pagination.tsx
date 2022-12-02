import React from "react";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const Pagination = ({
  pageCount,
  handlePageChange,
}: {
  pageCount: number;
  handlePageChange: (event: any) => void;
}) => {
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<BsChevronRight />}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<BsChevronLeft />}
        onPageChange={handlePageChange}
        renderOnZeroPageCount={undefined}
        className="text-white flex justify-center items-center gap-6 my-5"
        previousLinkClassName="mr-8 flex items-center bg-slate-700 py-2 px-2"
        nextClassName="ml-8 flex items-center bg-slate-700 py-2 px-2"
        activeClassName="border-slate-700 rounded-full px-3 py-1 bg-slate-700"
      />
    </div>
  );
};

export default Pagination;
