import Hero from "./Banner";
import BestService from "./BestService";
import NewsLetter from "./NewsLetter";

const Home = () => {
    return (
        <div className="container mx-auto">
           <Hero/>
           <BestService/>
           <NewsLetter/>
        </div>
    );
};

export default Home;