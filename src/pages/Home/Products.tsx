import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useGetProductsQuery } from "../../redux/features/productApi";
import { addToCart } from "../../redux/features/cartSlice";
import { TProduct } from "../../dataType/dataType";
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
const Products = () => {
  const dispatch = useAppDispatch();

  // State for search, filter, sort, and pagination
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const { data, error, isLoading } = useGetProductsQuery({
    searchTerm,
    sort,
    category: category === "All Products" ? "" : category,
    page,
    limit,
  });

  const handleAddToCart = (product: TProduct) => {
    dispatch(addToCart(product));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(e.target.value);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-gray-600">
          Showing {data?.data?.length || 0} results
        </h3>

        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border rounded-lg px-3 py-2"
          />

          <select
            value={category}
            onChange={handleCategoryChange}
            className="border rounded-lg px-3 py-2"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={handleSortChange}
            className="border rounded-lg px-3 py-2"
          >
            <option value="">Default Sort</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="latest">Latest</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center h-screen">
          <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-green-400 border-t-green-700"></div>
        </div>
      ) : error ? (
        <div className="flex justify-center items-center border h-screen">
          <h2 className="text-[#083214] text-center text-2xl ">
            Oops! Can't Find Data
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {data?.data?.map((product: TProduct) => (
            <div
              key={product._id}
              className="border rounded-lg p-4 shadow-md shadow-[#083214] hover:scale-95 transition duration-500"
            >
              <Link to={`/productDetails/${product._id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover"
                />
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-lg font-bold mt-2">{product.title}</h2>
                    <p className="text-gray-600">${product.price}</p>
                  </div>
                  <div className="flex mt-1">
                    {Array.from({
                      length: Math.floor(product.rating),
                    }).map((_, idx) => (
                      <svg
                        key={idx}
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-yellow-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.317 4.06a1 1 0 00.95.69h4.18c.969 0 1.372 1.24.588 1.81l-3.388 2.463a1 1 0 00-.364 1.118l1.317 4.061c.3.921-.755 1.688-1.54 1.118L10 14.848l-3.387 2.462c-.784.57-1.839-.197-1.54-1.118l1.317-4.061a1 1 0 00-.364-1.118L3.637 9.487c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.317-4.06z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </Link>
              <div className="mt-6">
                <button
                  className="px-6 py-3 bg-green-500 text-white rounded-lg w-full"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        <button
          className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-gray-300 rounded-lg"
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
