import { useGetProductsQuery } from "../../redux/features/productApi";
import ProductBanner from "./Banner.tsx/ProductBanner";

import AllProducts from "./ProductList/AllProducts";

const Product = () => {
  const { data, error, isLoading } = useGetProductsQuery("");
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  return (
    <div className="container mx-auto">
        <ProductBanner/>
        <AllProducts/>
      <div className="grid grid-cols-4 gap-5">
        {data &&
          data.map((post) => (
            <div className="card glass w-auto" key={post.id}>
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                  alt="car!"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.body}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Learn now!</button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Product;
