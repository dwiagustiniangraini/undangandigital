import { PhotoProvider, PhotoView } from "react-photo-view";
import img3 from "../assets/images/DDD_3135.webp";
import img4 from "../assets/images/DDD_3153.webp";
import img5 from "../assets/images/DDD_3160.jpg";
import img6 from "../assets/images/DDD_3185.webp";
import img7 from "../assets/images/DDD_3202.jpg";
import img8 from "../assets/images/DDD_3232.webp";
import img11 from "../assets/images/picture_1.webp";
import img12 from "../assets/images/picture_2.webp";

export default function Gallery() {
  const images = [img3, img4, img5, img6, img7, img8, img11, img12];
  return (
    <div className="pb-8 px-4 bg-[#472a1c] py-16">
      <h2 className="text-center text-white text-6xl italic mb-8 pinyon">
        Our Gallery
      </h2>
      <PhotoProvider>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 p-4">
          {images.map((src, idx) => (
            <PhotoView key={idx} src={src}>
              <img
                src={src}
                alt=""
                className="w-full h-auto object-cover rounded-lg shadow cursor-pointer"
              />
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
}
