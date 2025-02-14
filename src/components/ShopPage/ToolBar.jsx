import { Component, TableOfContents } from "lucide-react";
import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "popularity", label: "Popularity" },
  { value: "low-to-high", label: "Price: Low to High" },
  { value: "high-to-low", label: "Price: High to Low" },
  { value: "newest", label: "Newest" },
];

function ToolBar() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="flex flex-col items-center gap-5">
      <p className="font-bold text-primary">Showing all 12 results</p>

      <div className="flex gap-4 items-center">
        <p className="font-bold text-primary">Views:</p>
        <Component
          size="35"
          name="grid"
          className="text-primary-dark border border-primary p-1"
        />
        <TableOfContents
          size="35"
          name="list"
          className="text-primary-dark border border-primary p-1"
        />
      </div>
      <div className="flex gap-4 items-center">
        <div className="w-40">
          <Select
            options={options}
            value={selectedOption}
            onChange={setSelectedOption}
            className="text-sm"
          />
        </div>
        <button className="hover:bg-gray-500 border bg-secondary-blue text-white font-bold py-2 px-8 rounded-md">
          Filter
        </button>
      </div>
    </div>
  );
}

export default ToolBar;
