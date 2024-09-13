/* eslint-disable @typescript-eslint/no-explicit-any */
import { toast } from "react-toastify";
import { useCreateProductMutation } from "../../redux/features/productApi";
import { FieldValues, useForm } from "react-hook-form";
import { useState } from "react";
import { GoPlus } from "react-icons/go";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const CreateProduct = () => {
  const [openModal, setOpenModal] = useState(false);
  const [createProduct] = useCreateProductMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>();
  console.log(errors);

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    // console.log(data, formData);
    try {
      const response = await fetch(image_hosting_api, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const resData = await response.json();
      //   console.log("Image :", resData);
      //   console.log("Image URL:", resData.data.url);
      if (resData.success) {
        const newProduct = {
          product: {
            title: data.title,
            category: data.category,
            price: parseFloat(data.price),
            stock: parseFloat(data.stock),
            rating: parseFloat(data.rating),
            image: resData.data.display_url,
            description: data.description,
          },
        };

        await createProduct(newProduct).unwrap();
        toast.success(`Product is created successful`);
        reset();
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Failed to create product.");
    }
  };

  return (
    <div className="my-10">
      <button
        onClick={() => setOpenModal(true)}
        className="btn text-white bg-green-600 my -10 text-xl hover:text-black "
      >
        <GoPlus /> Create Product
      </button>

      {openModal && (
        <div
          onClick={() => setOpenModal(false)}
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm overflow-y-auto"
        >
          <div
            onClick={(e_) => e_.stopPropagation()}
            className="w-3/4 lg:w-3/5 my-10 mx-auto px-5 md:px-10 lg:px-20 py-5 bg-white/70 card overflow-y-auto max-h-[90vh] shadow-green-900 shadow-md"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
  <button
    onClick={() => setOpenModal(false)}
    className="btn btn-md btn-circle btn-ghost absolute right-4 top-2 py-4"
  >
    ✕
  </button>
  
  {/* Title and Category Row */}
  <div className="md:flex mt-8 mb-2 md:mb-8">
    <div className="form-control md:w-1/2">
      <label className="label">
        <span className="label-text text-xl font-medium text-[#63433f]">Title</span>
      </label>
      <label className="input-group">
        <input
          type="text"
          {...register("title", { required: "Title is required" })}
          placeholder="Product Title"
          className="input input-bordered w-full"
        />
      </label>
      {errors.title && typeof errors.title.message === 'string' && (
        <p className="text-red-500">{errors.title.message}</p>
      )}
    </div>
    
    <div className="form-control md:w-1/2 md:ml-4">
      <label className="label">
        <span className="label-text text-xl font-medium text-[#63433f]">Category</span>
      </label>
      <label>
        <select
          defaultValue="default"
          {...register("category", { validate: value => value !== 'default' || 'Category is required' })}
          className="select select-bordered w-full"
        >
          <option disabled value="default">Category</option>
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
      {errors.category && typeof errors.category.message === 'string' && (
        <p className="text-red-500">{errors.category.message}</p>
      )}
    </div>
  </div>
  
  {/* Rating and Image Row */}
  <div className="md:flex mb-2 md:mb-8">
    <div className="form-control md:w-1/2">
      <label className="label">
        <span className="label-text text-xl font-medium text-[#63433f]">Rating</span>
      </label>
      <label className="input-group">
        <input
          type="number"
          {...register("rating", {
            required: "Rating is required",
            validate: (value) =>
              (value >= 0 && value <= 5) || "Rating must be between 0 and 5",
          })}
          placeholder="Rating Products"
          className="input input-bordered w-full"
        />
      </label>
      {errors.rating && typeof errors.rating.message === 'string' && (
        <p className="text-red-500">{errors.rating.message}</p>
      )}
    </div>

    <div className="form-control md:w-1/2 md:ml-4">
      <label className="label">
        <span className="label-text text-xl font-medium text-[#63433f]">Image</span>
      </label>
      <label className="input-group w-full">
        <input
          type="file"
          {...register("image", { required: "Image is required" })}
          className="file-input file-input-bordered w-full"
        />
      </label>
      {errors.image && typeof errors.image.message === 'string' && (
        <p className="text-red-500">{errors.image.message}</p>
      )}
    </div>
  </div>

  {/* Price and Stock Row */}
  <div className="md:flex mb-2 md:mb-8">
    <div className="form-control md:w-1/2">
      <label className="label">
        <span className="label-text text-xl font-medium text-[#63433f]">Price</span>
      </label>
      <label className="input-group">
        <input
          type="number"
          {...register("price", { required: "Price is required" })}
          placeholder="Product Price"
          className="input input-bordered w-full"
        />
      </label>
      {errors.price && typeof errors.price.message === 'string' && (
        <p className="text-red-500">{errors.price.message}</p>
      )}
    </div>

    <div className="form-control md:w-1/2 md:ml-4">
      <label className="label">
        <span className="label-text text-xl font-medium text-[#63433f]">Stock</span>
      </label>
      <label className="input-group w-full">
        <input
          type="number"
          {...register("stock", { required: "Stock is required" })}
          className="input input-bordered w-full"
        />
      </label>
      {errors.stock && typeof errors.stock.message === 'string' && (
        <p className="text-red-500">{errors.stock.message}</p>
      )}
    </div>
  </div>

  {/* Details */}
  <div className="form-control mb-8">
    <label className="label">
      <span className="label-text text-xl font-medium text-[#63433f]">Details</span>
    </label>
    <label className="input-group">
      <input
        type="text"
        {...register("description", { required: "Description is required" })}
        placeholder="Input your product description"
        className="input input-bordered w-full"
      />
    </label>
    {errors.description && typeof errors.description.message === 'string' && (
      <p className="text-red-500">{errors.description.message}</p>
    )}
  </div>

  <input
    className="btn btn-block normal-case hover:bg-green-900 bg-green-700 text-white"
    type="submit"
    value="Create Product"
  />
</form>

          </div>
        </div>
      )}
    </div>
  );
};

export default CreateProduct;
