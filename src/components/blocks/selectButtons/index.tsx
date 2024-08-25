"use client";
import GenericInputField from "@/components/shared/inputPlaceholders/genericInputField";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shared/selectButtons";
import React, { useState } from "react";

const SelectButtons = () => {
  const [status, setStatus] = useState("");
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-xl font-semibold py-3 underline">Dropdown Example</h1>
      <div className=" mt-5">
        {/* search */}
        <Select defaultValue="ALL" onValueChange={setStatus}>
          <SelectTrigger className="w-[200px] ">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent className="bg-white focus:outline-none outline-none focus-within:outline-none ">
            <SelectItem value="ALL">All</SelectItem>
            <SelectItem value="PENDING">Pending</SelectItem>
            <SelectItem value="COMPLETED">Completed</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default SelectButtons;
