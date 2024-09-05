const ProductListing = () => {
  const products = [
    {
      id: 1,
      name: "American Baraba Fruit Trees",
      price: "৳ 1,400.00",
      image: "https://example.com/baraba.jpg",
    },
    {
      id: 2,
      name: "Best Thai All Seasons Mango Plant",
      price: "৳ 500.00",
      image: "https://example.com/mango.jpg",
    },
    {
      id: 3,
      name: "Chatoki Sweet Orange Trees",
      price: "৳ 300.00",
      image: "https://example.com/orange.jpg",
    },
    {
      id: 4,
      name: "Deua Monkey Jack Fruit Trees",
      price: "৳ 250.00",
      image: "https://example.com/monkeyjack.jpg",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-gray-600">Showing 1-30 of 90 results</h3>
        <select className="border rounded-lg px-3 py-2">
          <option>Default sorting</option>
          <option>Sort by price</option>
          <option>Sort by popularity</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <h2 className="text-lg font-bold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <div className="flex justify-between items-center mt-4">
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
                - 1 +
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded-lg">
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
