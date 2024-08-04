import React from "react";

const FilterBar = () => {
  return (
    <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-center gap-4">
      <div className="flex items-center gap-2">
        <label className="text-sm dark:text-white">City:</label>
        <select className="p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700">
          <option>Select a city</option>
          {/* Add city options here */}
        </select>
      </div>
      <div className="flex items-center gap-2">
        <label className="text-sm dark:text-white">Amenities:</label>
        <select className="p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700">
          <option>Select amenities</option>
          {/* Add amenities options here */}
        </select>
      </div>
      <div className="flex items-center gap-2">
        <label className="text-sm dark:text-white">Bedrooms:</label>
        <select className="p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700">
          <option>Select rooms</option>
          {/* Add rooms options here */}
        </select>
      </div>
      <div className="flex items-center gap-2">
        <label className="text-sm dark:text-white">Price Range:</label>
        <input
          type="range"
          min="0"
          max="350"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default FilterBar;
