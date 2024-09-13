

const BillingDetails = () => {
  return (
    <div className="bg-white p-8 shadow-md rounded-md border-t-4 border-green-500">
      <h2 className="text-2xl font-semibold mb-6 text-green-700">Billing details</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm text-gray-700">First name <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-700">Last name <span className="text-red-500">*</span></label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Company name (optional)</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Country / Region <span className="text-red-500">*</span></label>
          <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300">
            <option value="Bangladesh">Bangladesh</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Street address <span className="text-red-500">*</span></label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
            placeholder="House number and street name"
          />
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 mt-2 focus:ring focus:ring-green-300"
            placeholder="Apartment, suite, unit, etc. (optional)"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Town / City <span className="text-red-500">*</span></label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">District <span className="text-red-500">*</span></label>
          <select className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300">
            <option value="Gopalganj">Gopalganj</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Postcode / ZIP (optional)</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Phone <span className="text-red-500">*</span></label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm text-gray-700">Email address <span className="text-red-500">*</span></label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
          />
        </div>

        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="different-address"
            className="mr-2 text-green-500 focus:ring-green-300"
          />
          <label htmlFor="different-address" className="text-sm text-green-700 font-semibold">
            Ship to a different address?
          </label>
        </div>

        <div className="mt-4">
          <label className="block mb-1 text-sm text-gray-700">Order notes (optional)</label>
          <textarea
            className="w-full border border-gray-300 rounded-md p-2 focus:ring focus:ring-green-300"
            placeholder="Notes about your order, e.g., special notes for delivery."
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
