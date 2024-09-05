
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import slide1 from '../../assets/slide/daria-nepriakhina-MSlceJ0HFxA-unsplash.jpg'
import slide2 from '../../assets/slide/liana-mikah-BS_1XGRkIH4-unsplash.jpg'
import slide3 from '../../assets/slide/daryn-stumbaugh-2gtGfuIbhGk-unsplash.jpg'
const Banner = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay,Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero relative">
                        <img src={slide1} alt="Slide 1" />
                        <div className="hero-overlay bg-[#000000] bg-opacity-30"></div>
                        <div className="space-y-6 w-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center py-10">
                            <h1 className="text-xl md:text-4xl lg:text-7xl font-bold uppercase">"Where Every Seedling Becomes a Forest"</h1>
                            
                            <button className='btn btn-sm md:btn-md text-white bg-[#c500d4] hover:bg-transparent'>Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero relative">
                        <img src={slide2} alt="Slide 1" />
                        <div className="hero-overlay bg-[#000000] bg-opacity-40"></div>
                        <div className="space-y-6 w-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                        <p className="text-xs md:text-2xl lg:text-3xl text-gray-200" >Buy 1 Get 1 </p>
                            <h1 className="text-xl md:text-4xl lg:text-7xl font-bold uppercase" >"Planting Today, For a Greener Tomorrow"</h1>
                            <button className='btn  btn-sm md:btn-md text-white bg-[#c500d4] hover:bg-transparent'>Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="relative hero">
                        <img src={slide3} alt="Slide 1" />
                        <div className="hero-overlay bg-[#000000] bg-opacity-60"></div>
                        <div className="space-y-6 w-3/4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                            <p className="text-xs md:text-2xl lg:text-3xl text-gray-200" >Flat 50% Discount </p>
                            <h1 className="text-xl md:text-4xl lg:text-7xl font-bold uppercase" >"Summer Garden Cactus Plant"</h1>
                            <button className='btn  btn-sm md:btn-md text-white bg-[#c500d4] hover:bg-transparent'>Shop Now</button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
};

export default Banner;
