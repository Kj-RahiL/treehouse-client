import image1 from "../../assets/Gallery/image1.jpg";
import image2 from "../../assets/Gallery/image2.jpg";
import image3 from "../../assets/Gallery/image3.jpg";
import image4 from "../../assets/Gallery/image4.jpg";
import image5 from "../../assets/Gallery/image5.jpg";
import image6 from "../../assets/Gallery/image6.jpg";

const ImageGallery = () => {
  return (
    <div className="my-10">
      <h2 className="text-center text-2xl md:text-4xl lg:text-6xl font-semibold text-[#062810] py-10">
        Image Gallery{" "}
      </h2>

      <div className="text-center mx-auto container">
        <div className="grid grid-cols-4 grid-rows-4 gap-4 ">
          {/* Image 1 */}
          <div className="row-span-2 col-span-2">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image1}
              alt="Image 1"
            />
          </div>
          {/* Image 2 */}
          <img src="" alt="" />
          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image2}
              alt="Image 2"
            />
          </div>
          {/* Image 3 */}
          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image3}
              alt="Image 3"
            />
          </div>

          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image4}
              alt="Image 4"
            />
          </div>

          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image5}
              alt="Image 5"
            />
          </div>

          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image6}
              alt="Image 6"
            />
          </div>
          {/* Image 7 */}
          <div className="row-span-2 col-span-1">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image1}
              alt="Image 7"
            />
          </div>

          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image2}
              alt="Image 8"
            />
          </div>

          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image3}
              alt="Image 9"
            />
          </div>
          {/* Image 10 */}
          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image4}
              alt="Image 10"
            />
          </div>

          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image5}
              alt="Image 11"
            />
          </div>
          {/* Image 12 */}
          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image6}
              alt="Image 12"
            />
          </div>

          <div className="row-span-2 col-span-1">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image1}
              alt="Image 13"
            />
          </div>

          <div className="row-span-1 col-span-2">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image2}
              alt="Image 14"
            />
          </div>
          {/* Image 15 */}
          <div className="row-span-1 col-span-1">
            <img
              className="w-full h-full object-cover rounded-lg"
              src={image1}
              alt="Image 15"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
