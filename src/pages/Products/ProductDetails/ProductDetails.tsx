
import { Link, useParams } from "react-router-dom";
import { useGetProductsQuery } from "../../../redux/features/productApi";
import { TProduct } from "../../../dataType/dataType";
import { useAppDispatch } from "../../../redux/hooks";
import { addToCart } from "../../../redux/features/cartSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { data, error, isLoading } = useGetProductsQuery("");

  const currentProduct = data?.data?.find((data: TProduct) => data._id === id);
  console.log(currentProduct)
  const relatedProduct = data?.data?.filter(
    (data: TProduct) => data.category === currentProduct.category && data._id !== id
  );


  const handleAddToCart = (product: TProduct) => {
    dispatch(addToCart(product));
  };



  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="container mx-auto p-6 pt-20">
      <div className="flex flex-col md:flex-row md:space-x-8">
        {/* Image Section */}
        <div className="flex flex-col space-y-4 md:w-1/2">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={currentProduct.image} // Use the product image from API
            alt={currentProduct.title} // Use the product title from API
          />
          <div className="flex space-x-2">
            {/* Additional thumbnails (if any) */}
            <img
              className="w-16 h-16 object-cover rounded-lg"
              src={currentProduct.image}
              alt="Product Thumbnail 1"
            />
            <img
              className="w-16 h-16 object-cover rounded-lg"
              src={currentProduct.image}
              alt="Product Thumbnail 2"
            />
          </div>
        </div>

        {/* Right - Product Information */}
        <div className="md:w-1/2">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-semibold">{currentProduct.title}</h1>
              <p className="text-gray-500">{currentProduct.category}</p>
            </div>
            <div className="mt-2">
              <p className="text-xs text-gray-400 mt-2">
                {currentProduct.rating} reviews
              </p>
              <div className="flex mt-1">
                {/* Display star ratings based on the product rating */}
                {Array.from({ length: Math.floor(currentProduct.rating) }).map(
                  (_, idx) => (
                    <svg
                      key={idx}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.317 4.06a1 1 0 00.95.69h4.18c.969 0 1.372 1.24.588 1.81l-3.388 2.463a1 1 0 00-.364 1.118l1.317 4.061c.3.921-.755 1.688-1.54 1.118L10 14.848l-3.387 2.462c-.784.57-1.839-.197-1.54-1.118l1.317-4.061a1 1 0 00-.364-1.118L3.637 9.487c-.784-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.317-4.06z" />
                    </svg>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <span className="text-2xl font-bold">${currentProduct.price}</span>
            <p className="text-gray-600">{currentProduct.description}</p>
          </div>

          <div className="divider"></div>

          <div className="flex items-center mt-6 gap-10">
            <div className="flex items-center justify-between border rounded-lg">
            
              <span className="px-4 py-2"> Available: {currentProduct.stock}</span>
              
            </div>
            {
              currentProduct.stock === 0 ? <button onClick={()=> handleAddToCart(currentProduct)} className="btn btn-disabled text-black rounded-lg shadow transition duration-200">
              Stock Out
            </button> : <button onClick={()=> handleAddToCart(currentProduct)} className="px-4 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-600 transition duration-200">
              Add to Cart
            </button>
            }
          </div>
        </div>
      </div>

      <div className="mt-20 pb-10">
        <h2 className="text-center text-4xl">Related Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedProduct.map((product: TProduct) => (
            <div key={product._id} className="border rounded-lg p-4 shadow-lg">
              <Link to={`/productDetails/${product._id}`}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover"
                />
                <h2 className="text-lg font-bold mt-2">{product.title}</h2>
                <p className="text-gray-600">{product.price}</p>{" "}
              </Link>
              <div className="mt-6">
                <button
                  className="px-6 py-3 bg-green-500 text-white rounded-lg "
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
