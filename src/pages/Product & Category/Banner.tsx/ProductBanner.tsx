import slide1 from '../../../assets/productBanner.jpg'

const ProductBanner = () => {
  return (
    <div className="hero relative max-h-[400px] " >
      <img src={slide1} alt="Slide 1" className='object-cover h-[400px] w-full' />
      <div className="hero-overlay bg-[#000000] bg-opacity-50"></div>
      <div className=" w-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center py-10">
        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold text-[#eefcf2]">
        Our Products
        </h1>
      </div>
    </div>
  );
};

export default ProductBanner;
