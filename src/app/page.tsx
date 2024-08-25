import Buttons from "@/components/blocks/buttons";
import InputFields from "@/components/blocks/inputFields";
import Modals from "@/components/blocks/modals";
import PaginationExample from "@/components/blocks/paginations";
import SelectButtons from "@/components/blocks/selectButtons";

export default function Home() {
  return (
    <main className="my-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center underline">
        This is a Reusable Component List
      </h1>

      {/* Input field + */}
      <InputFields />

      <hr className="mt-10 h-[.12rem] bg-gray-400" />

      {/* Buttons + */}
      <Buttons />
      <hr className="mt-10 h-[.12rem] bg-gray-400" />

      {/* Buttons + */}
      <Modals />
      <hr className="mt-10 h-[.12rem] bg-gray-400" />

      {/* Dropdown + */}
      <SelectButtons />
      <hr className="mt-10 h-[.12rem] bg-gray-400" />

      <PaginationExample />
    </main>
  );
}
