import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../../../redux/features/productApi";
import { useAppDispatch } from "../../../redux/hooks";
import { TProduct } from "../../../dataType/dataType";
import { addToCart } from "../../../redux/features/cartSlice";

const ProductListing = () => {
  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetProductsQuery("");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const handleAddToCart = (product: TProduct) => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-gray-600">
          Showing 1-10 of {data?.data?.length} results
        </h3>
        <select className="border rounded-lg px-3 py-2">
          <option>Default sorting</option>
          <option>Sort by price</option>
          <option>Sort by popularity</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {data?.data?.map((product: TProduct) => (
          <div key={product._id} className="border rounded-lg p-4 shadow-lg">
            <Link to={`/productDetails/${product._id}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover"
              />
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold mt-2">{product.title}</h2>
                  <p className="text-gray-600">{product.price}</p>{" "}
                </div>
                <div className="flex mt-1">
                  {/* Display star ratings based on the product rating */}
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
                className="px-6 py-3 bg-green-500 text-white rounded-lg w-full "
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
