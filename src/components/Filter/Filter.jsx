import React, { useState } from 'react';
import { FiFilter } from "react-icons/fi";

const Filter = ({ onFilterChange }) => {
  const [open, setOpen] = useState(false);

  const handleFilter = (category) => {
    onFilterChange(category); // Send the selected category to the page Shop
    setOpen(false); // 
  };

  return (
    <div className="relative inline-block text-left mb-6 pr-6">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 rounded-md border border-gray-300 shadow px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-100"
      >
        <FiFilter size={18} />
        Filter
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1 text-sm text-gray-600 font-semibold">
            <button onClick={() => handleFilter("Colored Shirt")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Colored Shirt</button>
            <button onClick={() => handleFilter("Classic Shirt")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Classic Shirt</button>
            <button onClick={() => handleFilter("Skirt")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Skirt</button>
            <button onClick={() => handleFilter("Pants")} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Pants</button>
            <button onClick={() => handleFilter(null)} className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">Clear Filter</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
