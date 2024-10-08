import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import CartItem from "./CartItem";
import { clearCart } from "../../redux/features/cartSlice";
import { useEffect } from "react";
const Cart = () => {
  const dispatch = useAppDispatch();
  const { products, total, subTotal, shipping } = useAppSelector(
    (store) => store.cart
  );
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (products.length > 0) {
        event.preventDefault();
        event.returnValue = ""; // This is required to trigger the browser's confirmation dialog
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [products]);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-8 lg:flex lg:space-x-12 pt-20">
      {/* Cart Section */}
      <div className="lg:w-2/3">
        <table className="w-full text-left">
          <thead className="border-b">
            <tr className="text-center">
              <th className="py-4">Product</th>
              <th className="py-4">Price</th>
              <th className="py-4">Quantity</th>
              <th className="py-4">Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <CartItem key={product._id} product={product} />
            ))}
          </tbody>
        </table>

        {/* Coupon Section */}
        <div className="mt-8 flex justify-between items-center">
          <input
            type="text"
            placeholder="Coupon code"
            // value={coupon}
            // onChange={(e) => setCoupon(e.target.value)}
            className="border rounded-lg py-2 px-4 w-2/3"
          />
          <button className="ml-4 bg-blue-600 text-white py-2 px-4 rounded-lg">
            Apply
          </button>
        </div>

        {/* Cart Buttons */}
        <div className="mt-8 flex justify-between">
          <Link to="/product">
            <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg">
              Continue Shopping
            </button>
          </Link>
          <button
            onClick={() => handleClearCart()}
            className="bg-green-500 text-white py-2 px-6 rounded-lg"
          >
            Clear Cart
          </button>
        </div>
      </div>

      {/* Cart Summary Section */}
      <div className="lg:w-1/3 mt-12 lg:mt-0">
        <div className="border p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Cart Totals</h3>

          <div className="flex justify-between py-2 border-b">
            <span>Subtotal</span>
            <span>${subTotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-2 border-b">
            <span>Shipping</span>
            <select className="border p-2 rounded-md">
              {/* <option>Free Shipping</option> */}
              <option>${shipping} Flat Rate</option>
            </select>
          </div>

          <div className="flex justify-between py-2 border-b">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          {/* Payment Buttons */}
          <div className="mt-6">
            <Link to="/proceed/checkout">
              <button
                className={`w-full text-white py-2 rounded-lg mb-4  ${
                  products.length > 0
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-gray-400 text-gray-700 cursor-not-allowed"
                }`}
                disabled={products.length === 0}
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
