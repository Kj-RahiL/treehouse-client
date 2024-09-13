import ProductListing from "../Products/ProductList/ProductList";
import Hero from "./Banner";
import BestService from "./BestService";
import ImageGallery from "./ImageGallery";
import NewsLetter from "./NewsLetter";
import leaf from '../../assets/leaf.png';

const Home = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <BestService />
      <div>
        <img src={leaf} alt="leaf" className="mx-auto w-auto lg:w-12" />
        <h2 className="text-center text-2xl md:text-4xl lg:text-6xl font-semibold text-[#062810]">
          Our Product{" "}
        </h2>
        <ProductListing/>
      </div>
      <ImageGallery />
      <NewsLetter />
    </div>
  );
};

export default Home;
