import { CiEdit } from "react-icons/ci";
import { useUpdateProductMutation } from "../../redux/features/productApi";
import { toast } from "react-toastify";

const UpdateProduct = () => {
  const [updateProduct] = useUpdateProductMutation();
  const handleUpdate = async () => {
    try {
      await updateProduct({ id, ...updatedProduct }).unwrap();
      toast.success("Product updated successfully!");
    } catch (error) {
      console.log("Update error", { error });
      toast.error("Failed to update product.");
    }
  };
  return (
    <div>
      <button onClick={() => handleUpdate()}>
        <CiEdit className="text-[#021405] text-2xl" />
      </button>
    </div>
  );
};

export default UpdateProduct;
