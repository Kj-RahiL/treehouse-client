

const ProductListing = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Filter Sidebar */}
      <div className="grid grid-cols-4 gap-6">
        {/* Sidebar Filters */}
        <div className="col-span-1 bg-white p-4 shadow rounded-lg">
          {/* Price Filter */}
          <div className="mb-6">
            <h2 className="font-semibold text-lg mb-4">Filter by price</h2>
            <input
              type="range"
              min="50"
              max="2000"
              className="w-full slider"
            />
            <div className="flex justify-between mt-2 text-gray-600">
              <span>৳ 50</span>
              <span>৳ 2,000</span>
            </div>
            <button className="bg-green-600 text-white w-full mt-4 py-2 rounded-lg">
              Filter
            </button>
          </div>

          {/* Category Filter */}
          <div className="mb-6">
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
          </div>

          {/* Other Filters */}
          <div>
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
          </div>
        </div>

        {/* Product Listing */}
        <div className="col-span-3">
          {/* Header and Sorting */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-gray-600">Showing 1-30 of 90 results</h3>
            <select className="border rounded-lg px-3 py-2">
              <option>Default sorting</option>
              <option>Sort by price</option>
              <option>Sort by popularity</option>
            </select>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
