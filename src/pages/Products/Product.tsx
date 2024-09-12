
import ProductBanner from "./Banner.tsx/ProductBanner";

import AllProducts from "./ProductList/AllProducts";

const Product = () => {
 
  return (
    <div className="container mx-auto">
        <ProductBanner/>
        <AllProducts/>
    </div>
  );
};

export default Product;
