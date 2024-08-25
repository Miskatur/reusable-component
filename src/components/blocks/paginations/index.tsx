"use client";
import Pagination from "@/components/shared/pagination";
import React, { useState } from "react";

const PaginationExample = () => {
  const [limit, setLimit] = useState<number | string>(10);
  const [page, setPage] = useState(1);
  return (
    <div className="">
      <div className="max-w-xl mx-auto my-10">
        <h1 className="text-xl font-semibold py-3 underline">
          Pagination Example
        </h1>
      </div>

      <Pagination
        currentPage={1}
        limit={10}
        setLimit={setLimit}
        totalItems={100}
        key={"saa"}
        onPageChange={setPage}
      />
    </div>
  );
};

export default PaginationExample;
