import React, { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white shadow-lg p-4 rounded-lg">
      {/* price filter */}
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-4">Filter by price</h2>
        <input type="range" min="50" max="2000" className="w-full slider" />
        <div className="flex justify-between mt-2 text-gray-600">
          <span>৳ 50</span>
          <span>৳ 2,000</span>
        </div>
        <button className="bg-green-600 text-white w-full mt-4 py-2 rounded-lg">
          Filter
        </button>
      </div>
      {/* Category Filter */}
      {/* <div className="mb-6">
        <h2 className="font-semibold text-lg mb-4">Filter by</h2>
        <ul className="space-y-3">
          <li>
            <label className="flex items-center">
              <input type="radio" name="fruit-type" className="mr-2" />
              All Seasons Fruit (2)
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input type="radio" name="fruit-type" className="mr-2" />
              Deshi Fruit (38)
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input type="radio" name="fruit-type" className="mr-2" />
              Foreign Fruit (52)
            </label>
          </li>
        </ul>
      </div> */}

      {/* Other Filters */}
      {/* <div>
        <h2 className="font-semibold text-lg mb-4">Filter by</h2>
        <ul className="space-y-3">
          <li>
            <label className="flex items-center">
              <input type="radio" name="age-filter" className="mr-2" />
              1-3 Months (4)
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input type="radio" name="age-filter" className="mr-2" />
              6-12 Months (8)
            </label>
          </li>
          <li>
            <label className="flex items-center">
              <input type="radio" name="age-filter" className="mr-2" />
              1-2 Years (74)
            </label>
          </li>
        </ul>
      </div> */}

      {/* Sidebar Header */}
      <div
        className="flex justify-between items-center cursor-pointer mb-4"
        onClick={toggleExpand}
      >
        <h2 className="font-semibold text-lg">Show all categories</h2>
        <span>
          {isExpanded ? (
            <GoTriangleDown className="text-2xl"/>
          ) : (
            <GoTriangleUp className="text-2xl"/>
          )}
        </span>
      </div>

      {/* Category List */}
      {isExpanded && (
        <ul className="space-y-2">
          <li>All Products (98)</li>
          <li>Artificial Grass (1)</li>
          <li>Bonsai Plant (2)</li>
          <li>Flower Plants (10)</li>
          <li>Foreign Plants (1)</li>
          <li>Herbal Plants (1)</li>
          <li>Outdoor Plants (1)</li>
          <li>Woody Plants (3)</li>
          <li>Fruit Plants (90)</li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
