/* eslint-disable @typescript-eslint/no-explicit-any */
import { CiEdit } from "react-icons/ci";
import {
  useGetProductsQuery,
  useUpdateProductMutation,
} from "../../redux/features/productApi";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { TProduct } from "../../dataType/dataType";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateProduct = ({ id }: { id: string }) => {
  const [openModal, setOpenModal] = useState(false);
  const [updateProduct] = useUpdateProductMutation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  console.log(errors);

  const { data } = useGetProductsQuery("");

  const product = data?.data?.find((data: TProduct) => data._id === id);
  console.log(product);
  useEffect(() => {
    if (product) {
      setValue("title", product.title); 
      setValue("category", product.category);    
      setValue("price", product.price);    
      setValue("rating", product.rating);    
      setValue("stock", product.stock);    
      setValue("description", product.description);    
    }
  }, [product, setValue]);

  const onSubmit = async (data: any) => {
    let imageUrl = product?.image; 
  
    // Check if the user has selected a new image
    if (data.image && data.image[0]) {
      try {
        const formData = new FormData();
        formData.append("image", data.image[0]);
  
        const response = await fetch(image_hosting_api, {
          method: "POST",
          body: formData,
        });
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const resData = await response.json();
        console.log("Image uploaded successfully:", resData);
        
        if (resData.success) {
          imageUrl = resData.data.display_url; // Set the new image URL
        }
      } catch (error) {
        console.error("Image upload error:", error);
        toast.error("Image upload failed, using previous image.");
      }
    }
  
    try {
      const updatedProduct = {
        product: {
          title: data.title || product?.title,
          category: data.category || product?.category,
          price: data.price ? parseFloat(data.price) : product?.price,
          stock: data.stock ? parseFloat(data.stock) : product?.stock,
          rating: data.rating ? parseFloat(data.rating) : product?.rating,
          image: imageUrl, // Use the new image if uploaded, otherwise keep the old one
          description: data.description || product?.description,
        },
      };
   
      await updateProduct({ id, ...updatedProduct }).unwrap();
      toast.success("Product updated successfully!");
      setOpenModal(false)
    } catch (error) {
      console.error("Product update error:", error);
      toast.error("Failed to update the product.");
    }
  };
  
  return (
    <div>
      <button onClick={() => setOpenModal(true)}>
        <CiEdit className="text-[#021405] text-2xl" />
      </button>
      {openModal && (
        <div
          onClick={() => setOpenModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm overflow-y-auto"
        >
          <div
            onClick={(e_) => e_.stopPropagation()}
            className="w-3/4 lg:w-3/5 my-10 mx-auto px-5 md:px-10 lg:px-20 py-5 bg-white/70 card overflow-y-auto max-h-[90vh] shadow-green-900 shadow"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <button
                onClick={() => setOpenModal(false)}
                className="btn btn-md btn-circle btn-ghost absolute right-4 top-2 py-4"
              >
                ✕
              </button>
              {/* title and category row */}
              <div className="md:flex mt-8 mb-2  md:mb-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-xl font-medium text-[#63433f]">
                      Title
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="text"
                      {...register("title")}
                      placeholder="Product Title"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>
                <div className="form-control md:w-1/2 md:ml-4">
                  <label className="label">
                    <span className="label-text text-xl font-medium text-[#63433f]">
                      Category
                    </span>
                  </label>
                  <label>
                    <select
                      defaultValue="category"
                      {...register("category")}
                      className="select select-bordered w-full "
                    >
                      <option disabled value="default">
                        Category
                      </option>
                      <option value="Artificial Grass">Artificial Grass</option>
                      <option value="Bonsai Plant">Bonsai Plant</option>
                      <option value="Flower Plants">Flower Plants</option>
                      <option value="Foreign Plants">Foreign Plants</option>
                      <option value="Herbal Plants">Herbal Plants</option>
                      <option value="Outdoor Plants">Outdoor Plants</option>
                      <option value="Woody Plants">Woody Plants</option>
                      <option value="Fruit Plants">Fruit Plants</option>
                    </select>
                  </label>
                </div>
              </div>

              {/* rating and image row */}
              <div className="md:flex mb-2  md:mb-8">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text text-xl font-medium text-[#63433f]">
                      Rating
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      step="0.01" 
                      {...register("rating", {
                        validate: (value) =>
                          (value >= 0 && value <= 5) ||
                          "Rating must be between 0 and 5",
                      })}
                      placeholder="Rating Products"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control md:w-1/2 md:ml-4">
                  <label className="label">
                    <span className="label-text text-xl font-medium text-[#63433f]">
                      Image
                    </span>
                  </label>
                  <label className="input-group w-full">
                    <input
                      type="file"
                      {...register("image")}
                      className="file-input file-input-bordered w-full "
                    />
                  </label>
                </div>
              </div>

              {/* price and stock row */}
              <div className="md:flex mb-2  md:mb-8">
                <div className="form-control md:w-1/2 ">
                  <label className="label">
                    <span className="label-text text-xl font-medium text-[#63433f]">
                      Price
                    </span>
                  </label>
                  <label className="input-group">
                    <input
                      type="number"
                      step="0.01" 
                      {...register("price")}
                      placeholder="Product Price"
                      className="input input-bordered w-full"
                    />
                  </label>
                </div>

                <div className="form-control md:w-1/2 md:ml-4">
                  <label className="label">
                    <span className="label-text text-xl font-medium text-[#63433f]">
                      Stock
                    </span>
                  </label>
                  <label className="input-group w-full">
                    <input
                      type="number"
                      {...register("stock")}
                      className="input input-bordered w-full "
                    />
                  </label>
                </div>
              </div>

              {/* details */}
              <div className="form-control mb-8">
                <label className="label">
                  <span className="label-text text-xl font-medium text-[#63433f]">
                    Details
                  </span>
                </label>
                <label className="input-group">
                  <input
                     type="text"
                    {...register("description")}
                    placeholder="Input your product description"
                    className="input input-bordered w-full "
                  />
                </label>
              </div>

              {/* submit */}
              <input
                className="btn btn-block normal-case hover:bg-green-900 bg-green-700 text-white"
                type="submit"
                value="Apply"
              />
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProduct;
