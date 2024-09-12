import Hero from "./Banner";
import BestService from "./BestService";
import ImageGallery from "./ImageGallery";
import NewsLetter from "./NewsLetter";

const Home = () => {
    return (
        <div className="container mx-auto">
           <Hero/>
           <BestService/>
           <ImageGallery/>
           <NewsLetter/>
        </div>
    );
};

export default Home;