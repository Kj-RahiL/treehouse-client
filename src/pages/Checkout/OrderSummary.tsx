import { useAppSelector } from "../../redux/hooks";


const OrderSummary = () => {
    const {products, total, subTotal} = useAppSelector((store) => store.cart);
    console.log(products)
  return (
    <div className="bg-white p-6 shadow-md rounded-md border-t-4 border-green-500">
      <h2 className="text-2xl font-semibold mb-6 text-green-700">Your Order</h2>

      <table className="w-full mb-6">
        <thead>
          <tr>
            <th className="text-left text-gray-700 uppercase text-sm pb-3">Product</th>
            <th className="text-right text-gray-700 uppercase text-sm pb-3">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product)=>(
            <tr className="border-t" key={product._id}>
            <td className="py-3 text-gray-700">{product.title} × {product.quantity}</td>
            <td className="text-right text-gray-700">${(product.price * product.quantity).toFixed(2)}</td>
          </tr>
          ))}
         
          <tr className="border-t">
            <td className="py-3 font-semibold text-gray-700">Subtotal</td>
            <td className="text-right font-semibold text-gray-700">${subTotal}</td>
          </tr>
          <tr className="border-t">
            <td className="py-3 text-gray-700">Shipping</td>
            <td className="text-right text-gray-700">Flat Rate: $5.00</td>
          </tr>
          <tr className="border-t">
            <td className="py-3 font-semibold text-gray-700">Total</td>
            <td className="text-right font-semibold text-gray-700">${total}</td>
          </tr>
        </tbody>
      </table>

      {/* Payment Methods */}
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            className="form-radio h-5 w-5 text-green-500 border-gray-300"
          />
          <span className="ml-2 text-gray-700">Bkash</span>
        </label>
        <div className="text-sm text-gray-600 ml-6">
          Please call 01727941201 before making a payment. Fill out the form after completing your bKash payment.
        </div>
        <div className="text-sm text-gray-600 ml-6 mt-1">
          Note that an 1.85% bKash “SEND MONEY” cost is included with the net price.
        </div>
      </div>

      {/* Transaction Details */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm text-gray-700">bKash Number</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
            placeholder="017XXXXXXXX"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-700">Transaction ID</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
            placeholder="8N7A6D5E7M"
          />
        </div>
      </div>

      {/* Other Payment Methods */}
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            className="form-radio h-5 w-5 text-green-500 border-gray-300"
          />
          <span className="ml-2 text-gray-700">Rocket</span>
        </label>
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="radio"
            name="paymentMethod"
            className="form-radio h-5 w-5 text-green-500 border-gray-300"
          />
          <span className="ml-2 text-gray-700">Nagad</span>
        </label>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          id="terms"
          className="h-5 w-5 text-green-500 border-gray-300 focus:ring-green-300"
        />
        <label htmlFor="terms" className="ml-2 text-gray-700 text-sm">
          I have read and agree to the website terms and conditions.
        </label>
      </div>

      {/* Place Order Button */}
      <button className="w-full bg-green-600 text-white text-lg font-semibold py-2 rounded-md hover:bg-green-700 transition-colors">
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
