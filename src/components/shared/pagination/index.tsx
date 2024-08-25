"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import GenericButton from "../buttons/genericButton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../selectButtons";

type TPagination = {
  totalItems: number;
  limit: number | string;
  setLimit: React.Dispatch<React.SetStateAction<number | string>>;
  currentPage: number;
  onPageChange: (newPage: number) => void;
};

const limitValues = [10, 20, 30, 40, 50];

const Pagination = ({
  totalItems,
  limit,
  setLimit,
  currentPage,
  onPageChange,
}: TPagination) => {
  // ==== CALCULATE TOTAL PAGES ====
  const totalPages = Math.ceil(Number(totalItems) / Number(limit));

  // ==== HANDLING PREV PAGE ====
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  // ==== HANDLING NEXT PAGE ====
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <>
      {/* larger device */}
      <div className="hidden w-full items-center justify-between gap-4 lg:flex">
        {/* Prev Button */}
        <GenericButton
          //   size="sm"
          variant="pagination"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="py-2"
        >
          <div className="flex space-x-2 items-center justify-center">
            <ChevronLeft className="mr-2 " size={20} />
            Previous
          </div>
        </GenericButton>

        {/* Per Page Dropdown and Displaing Number */}
        <div className="flex items-center gap-2 text-sm">
          <Select defaultValue="10" onValueChange={setLimit}>
            <SelectTrigger className="w-16">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent className="w-16 bg-white">
              {limitValues?.map((value: number, index) => {
                return (
                  <SelectItem
                    className="bg-white z-50"
                    key={index}
                    value={String(value)}
                  >
                    {value}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <div className="text-sm font-medium text-muted-foreground">
            Results per page | Displaying{" "}
            {totalItems > 0
              ? Math.min(1 + (currentPage - 1) * Number(limit), totalItems)
              : 0}{" "}
            -{" "}
            {totalItems > 0
              ? Math.min(currentPage * Number(limit), totalItems)
              : 0}{" "}
            of {totalItems}
          </div>
        </div>

        {/* Next Button */}
        <GenericButton
          //   size="sm"
          className="py-2"
          variant="pagination"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          <div className="flex space-x-2 items-center justify-center">
            Next <ChevronRight className="ml-2" size={20} />
          </div>
        </GenericButton>
      </div>
      {/* smaller device */}
      <div className="flex w-full flex-col gap-8 lg:hidden">
        {/* Per Page Dropdown and Displaing Number */}
        <div className="flex items-center gap-4">
          <Select defaultValue="10" onValueChange={setLimit}>
            <SelectTrigger className="w-16">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent className="w-16">
              {limitValues?.map((value: number, index) => {
                return (
                  <SelectItem key={index} value={String(value)}>
                    {value}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
          <div className="text-xs font-medium text-muted-foreground">
            Results per page | Displaying{" "}
            {totalItems > 0
              ? Math.min(1 + (currentPage - 1) * Number(limit), totalItems)
              : 0}{" "}
            -{" "}
            {totalItems > 0
              ? Math.min(currentPage * Number(limit), totalItems)
              : 0}{" "}
            of {totalItems}
          </div>
        </div>
        {/* prev and next button */}
        <div className="flex w-full items-center justify-between gap-4">
          {/* Prev Button */}
          <GenericButton
            // size="sm"
            className="p-2 text-sm"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="mr-2" size={16} />
            Previous
          </GenericButton>
          {/* Next Button */}
          <GenericButton
            // size="sm"

            className="p-2 text-sm"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next <ChevronRight className="ml-2" size={16} />
          </GenericButton>
        </div>
      </div>
    </>
  );
};

export default Pagination;
