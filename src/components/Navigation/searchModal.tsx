import { useState, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { useGetProductsQuery } from "../../redux/features/productApi";
import { TProduct } from "../../dataType/dataType";

const SearchModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300); // delay by 300ms
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const { data, error, isLoading } = useGetProductsQuery({
    searchTerm: debouncedSearchTerm,
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>
        <BsSearch className="text-base md:text-2xl font-thin mr-4 md:mr-10" />
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex z-50">
          <div className="bg-white w-full h-fit rounded-lg shadow-lg">
            <div className="px-6 py-4 flex justify-between items-center border-b">
              <h2 className="text-xl font-semibold text-black">Search</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                &times;
              </button>
            </div>

            <div className="p-6">
              <div className="flex items-center bg-white shadow-sm px-4 py-2 w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300">
                <BsSearch />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="flex-grow outline-none px-3 text-sm text-gray-700"
                  placeholder="Search products..."
                />

                <button
                  onClick={() => setShowModal(false)}
                  type="submit"
                  className="bg-blue-600 text-white rounded-full px-4 py-1 text-sm font-medium"
                >
                  Search
                </button>
              </div>

              {/* Render search results */}
              <div>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error fetching data</p>}
                {data && data.data.length === 0 && <p>No results found</p>}
                {data?.data?.map((product:TProduct) => (
                  <p key={product._id}>{product.title}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchModal;
