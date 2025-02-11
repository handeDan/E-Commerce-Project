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
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="slide-content flex items-center"
            style={{
              backgroundImage: "url('images/product-slide-1.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              width: "100vw",
              height: "80vh",
            }}
          >
            <div className="flex flex-col items-center text-center text-white">
              <p className="font-bold">SUMMER 2020</p>
              <p className="logo text-40px text-wrap text-center w-2/3 font-bold my-10 leading-tight">
                NEW COLLECTION
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

        <SwiperSlide>
          <div
            className="slide-content"
            style={{
              backgroundImage: "url('images/product-slide-2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          >
            <div className="flex flex-col items-center pt-20">
              <p className="logo text-5xl">THE BEST PRODUCTS EVER</p>
              <br />
              <p>Discover our best products</p>
              <button
                onClick={handleClick}
                className="bg-gray-950 hover:bg-gray-500 text-xl text-white font-bold py-3 px-6 rounded-full m-5"
              >
                CHECK NOW
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
