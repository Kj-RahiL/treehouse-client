import React, { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
interface SidebarProps {
  setSelectedCategory: (category: string) => void;
}
const categories = [
  "All Products",
  "Artificial Grass",
  "Bonsai Plant",
  "Flower Plants",
  "Foreign Plants",
  "Herbal Plants",
  "Outdoor Plants",
  "Woody Plants",
  "Fruit Plants",
];
const Sidebar: React.FC<SidebarProps> = ({ setSelectedCategory }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>("All Products");

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    if (category === "All Products") {
      setSelectedCategory("");
    } else {
      setSelectedCategory(category);
    }
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
            <GoTriangleDown className="text-2xl" />
          ) : (
            <GoTriangleUp className="text-2xl" />
          )}
        </span>
      </div>

      {/* Category List */}
      {isExpanded && (
        <ul className="space-y-2">
          {categories.map((category) => (
            <li
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`cursor-pointer p-2 rounded-lg hover:text-lg ${
                activeCategory === category
                  ? "bg-[#e4e8e5] font-semibold text-lg"
                  : "bg-transparent "
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
