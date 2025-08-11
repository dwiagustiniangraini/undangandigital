import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import img3 from "../assets/images/DDD_3135.webp";
import img4 from "../assets/images/DDD_3153.webp";
import img5 from "../assets/images/DDD_3160.jpg";
import img6 from "../assets/images/DDD_3185.webp";
import img7 from "../assets/images/DDD_3202.jpg";
import img8 from "../assets/images/DDD_3232.webp";
import img11 from "../assets/images/picture_1.webp";
import img12 from "../assets/images/picture_2.webp";

export default function Slideshow() {
  const images = [img3, img4, img5, img6, img7, img8, img11, img12];
  return (
    <div className="slideshow bg-[#472a1c]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        speed={2500}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="image-fade">
              <img
                src={src}
                alt={`Gallery ${index}`}
                className="w-full h-auto object-cover "
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
