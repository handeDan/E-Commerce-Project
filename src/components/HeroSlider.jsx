import React from "react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";

function HeroSlider() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="slide-content flex items-center bg-cover g-bottom w-full h-[80vh]"
            style={{
              backgroundImage: "url('images/product-slide-1.jpg')",
            }}
          >
            <div className="flex flex-col items-center text-center text-white">
              <p className="font-bold">SUMMER 2025</p>
              <p className="logo text-40px text-wrap text-center w-2/3 font-bold my-10 leading-tight">
                NEW COLLECTION
              </p>
              <p className="w-3/6 font-medium mb-5">
                We know how large objects will act, but things on a small scale.
              </p>
              <button
                onClick={handleClick}
                className="bg-secondary-light_green hover:bg-gray-500 text-xl text-white font-bold py-3 px-8 rounded-sm m-5"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="slide-content flex items-center bg-cover g-bottom w-full h-[80vh]"
            style={{
              backgroundImage: "url('images/product-slide-2.jpg')",
            }}
          >
            <div className="flex flex-col items-center text-center text-white">
              <p className="font-bold">SUMMER 2025</p>
              <p className="logo text-40px text-wrap text-center w-2/3 font-bold my-10 leading-tight">
                OUR BEST PRODUCTS
              </p>
              <p className="w-3/6 font-medium">
                We know how large objects will act, but things on a small scale.
              </p>
              <button
                onClick={handleClick}
                className="bg-green-500 hover:bg-gray-500 text-xl text-white font-bold py-3 px-8 rounded-sm m-5"
              >
                SHOP NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
