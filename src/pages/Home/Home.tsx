import Hero from "./Banner";
import BestService from "./BestService";
import ImageGallery from "./ImageGallery";
import NewsLetter from "./NewsLetter";
import leaf from '../../assets/leaf.png';
import Products from "./Products";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Hero />
      <BestService />
      <div className="my-20">
        <img src={leaf} alt="leaf" className="mx-auto w-auto lg:w-12" />
        <h2 className="mb-16 text-center text-2xl md:text-4xl lg:text-6xl font-semibold text-[#062810]">
          Our Product{" "}
        </h2>
        <Products/>
      </div>
      <ImageGallery />
      <NewsLetter />
    </div>
  );
};

export default Home;
