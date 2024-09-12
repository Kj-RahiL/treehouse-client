const ImageGallery = () => {
  return (
    <div>
      <h2 className="text-center text-2xl md:text-4xl lg:text-6xl font-semibold text-[#062810]">
        Image Gallery{" "}
      </h2>

  <div className="text-center p-6">
    <h1 className="text-3xl font-bold mb-6">Mosaic View</h1>
    <div className="grid grid-cols-4 grid-rows-4 gap-4 mx-auto max-w-5xl">
     {/* Image 1 */}
      <div className="row-span-2 col-span-2">
        <img className="w-full h-full object-cover rounded-lg" src="https://example.com/image1.jpg" alt="Image 1" />
      </div>
     {/* Image 2 */}
     <img src="" alt="" />
      <div className="row-span-1 col-span-1">
        <img className="w-full h-full object-cover rounded-lg" src="https://example.com/image2.jpg" alt="Image 2"/>
      </div>
      {/* Image 3 */}
      <div className="row-span-1 col-span-1">
        <img className="w-full h-full object-cover rounded-lg" src="https://example.com/image3.jpg" alt="Image 3"/>
      </div>
   
      <div className="row-span-1 col-span-1">
        <img className="w-full h-full object-cover rounded-lg" src="https://example.com/image4.jpg" alt="Image 4"/>
      </div>

      <div className="row-span-1 col-span-1">
        <img className="w-full h-full object-cover rounded-lg" src="https://example.com/image5.jpg" alt="Image 5"/>
      </div>
     
      <div className="row-span-1 col-span-1">
        <img className="w-full h-full object-cover rounded-lg" src="https://example.com/image6.jpg" alt="Image 6"/>
      </div>
      {/* Image 7 */}
      <div className="row-span-2 col-span-1">
        <img className="w-full h-full object-cover rounded-lg" src="https://example.com/image7.jpg" alt="Image 7"/>
      </div>

      <div className="row-span-1 col-span-1">
        <img className="w-full h-full object-cover rounded-lg" src="https://example.com/image8.jpg" alt="Image 8"/>
      </div>

      <div className="row-span-1 col-span-1">
        <img className="w-full h-full object-cover rounded-lg" src="https://example.com/image9.jpg" alt="Image 9"/>
      </div>
     {/* Image 10 */}
      <div className="row-span-1 col-span-1">
        <img className="w-full h-full object-cover rounded-lg" src="https://example.com/image10.jpg" alt="Image 10"/>
      </div>

      <div className="row-span-1 col-span-1">
        <img className="w-full h-full object-cover rounded-lg" src="https://example.com/image11.jpg" alt="Image 11"/>
      </div>
     {/* Image 12 */}
      <div className="row-span-1 col-span-1">
        <img className="w-full h-full object-cover rounded-lg" src="https://example.com/image12.jpg" alt="Image 12"/>
      </div>
 
      <div className="row-span-2 col-span-1">
        <img className="w-full h-full object-cover rounded-lg" src="https://example.com/image13.jpg" alt="Image 13"/>
      </div>

      <div className="row-span-1 col-span-2">
        <img className="w-full h-full object-cover rounded-lg" src="https://example.com/image14.jpg" alt="Image 14"/>
      </div>
       {/* Image 15 */}
      <div className="row-span-1 col-span-1">
        <img className="w-full h-full object-cover rounded-lg" src="https://example.com/image15.jpg" alt="Image 15"/>
      </div>
    </div>
  </div>
    </div>
  );
};

export default ImageGallery;
