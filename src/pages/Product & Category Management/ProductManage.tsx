import  { useState } from "react";
import { MdDelete } from "react-icons/md";
import { useDeleteProductMutation, useGetProductsQuery } from "../../redux/features/productApi";
import { TProduct } from "../../dataType/dataType";
import { toast } from "react-toastify";
import UpdateProduct from "./UpdateProduct";
import CreateProduct from "./CreateProduct";
import Swal from "sweetalert2";

const ProductManage = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(10); // or any other limit

  const { data, error, isLoading } = useGetProductsQuery({ page, limit });
  const [deleteProduct] = useDeleteProductMutation();

  const handleDelete = async (id: string, title: string) => {
 try {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    });

    if (result.isConfirmed) {
      await deleteProduct(id).unwrap();
      Swal.fire({
        title: "Deleted!",
        text: `Your ${title} has been deleted.`,
        icon: "success"
      });
    }
  } catch (error) {
    console.log("deleted error", error);
    toast.error("Failed to delete product.");
  }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage > 0) {
      setPage(newPage);
    }
  };

  if (isLoading)
    return (
      <div className="text-center">
        Loading<span className="loading loading-dots loading-xs"></span>
      </div>
    );
  if (error) return <div>Error loading data</div>;

  return (
    <div className="bg-[#b0bdb1]">
      <div className="container mx-auto py-20">
        <CreateProduct />
        <table className="w-full text-left">
          <thead className="border-b text-white bg-[#4f6a53]">
            <tr className="text-sm md:text-base lg:text-xl">
              <th className="py-4 px-2">Product</th>
              <th className="py-4 hidden md:block">Category</th>
              <th className="py-4">Price</th>
              <th className="py-4">Stock</th>
              <th className="py-4">Update</th>
              <th className="py-4">Delete</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data?.data?.map((product: TProduct) => (
              <tr className="border-b font-medium" key={product._id}>
                <td className="py-4 flex items-center space-x-2 md:space-x-6">
                  <img
                    src={product?.image}
                    alt={product?.title}
                    className="w-14 md:w-24 h-14 md:h-16 object-cover"
                  />
                  <div className="flex flex-col">
                    <p className="font-semibold text-sm md:text-lg">
                      {product?.title}
                    </p>
                    <p className="text-xs md:text-sm text-gray-700 md:hidden sm:block">
                      {product?.category}
                    </p>
                  </div>
                </td>
                <td className="hidden md:table-cell">{product.category}</td>
                <td className="text-xs md:text-base text-center md:text-left">
                  ${product.price}
                </td>
                <td className="text-xs md:text-base text-center md:text-left">
                  {product.stock}
                </td>
                <td className="text-xs md:text-base">
                  <UpdateProduct id={product._id} />
                </td>
                <td className="text-xs md:text-base">
                  <button
                    onClick={() => handleDelete(product._id, product.title)}
                  >
                    <MdDelete className="text-red-500 text-2xl" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Pagination Controls */}
        <div className="flex justify-center mt-8">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg mr-2"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg"
            onClick={() => handlePageChange(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductManage;
