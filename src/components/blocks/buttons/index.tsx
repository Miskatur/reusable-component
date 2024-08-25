import GenericButton from "@/components/shared/buttons/genericButton";
import React from "react";

const Buttons = () => {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-xl font-semibold py-3 underline">Button</h1>
      <div className="space-x-5 space-y-5">
        <GenericButton variant={"primary"}>Primary Button</GenericButton>
        <GenericButton variant={"primary-hover"}>
          Primary hover Button
        </GenericButton>
        <GenericButton variant={"outline"}>Outline Button</GenericButton>
        <GenericButton variant={"rounded"}>Rounded Button</GenericButton>
        <GenericButton variant={"rounded-hover"}>
          Rounded hover Button
        </GenericButton>
        <GenericButton variant={"rounded-hover"} className="w-full">
          Rounded full size hover Button
        </GenericButton>
      </div>
    </div>
  );
};

export default Buttons;
