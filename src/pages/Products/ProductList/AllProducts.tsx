import { useState } from "react";
import ProductListing from "./ProductList";
import Sidebar from "./Sidebar";


const AllProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div className="mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <Sidebar setSelectedCategory={setSelectedCategory}/>
        </div>
        
        {/* Product Listing */}
        <div className="md:col-span-3">
          <ProductListing selectedCategory={selectedCategory}/>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
