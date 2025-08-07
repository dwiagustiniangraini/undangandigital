import { FaLocationDot } from "react-icons/fa6";
import bgImage from "../assets/images/JAWA-BACKGROUND.webp";
import wayang from "../assets/images/JAWA-GUNUNGAN.webp";
import { FaMapMarker, FaMapMarkerAlt } from "react-icons/fa";

export default function Acara({ title }) {
  return (
    <div
      className="rounded-full p-6 bg-white text-black"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div
        className=" rounded-full flex justify-center flex-col items-center px-6 py-20 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)),url(${bgImage})`,
        }}
      >
        {/* <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-10"
        ></div> */}
        <img src={wayang} alt="" className="w-[85px] mb-10" height={1000} />
        <h2 className="text-5xl  pinyon mb-5">{title}</h2>
        <div className="playfair text-3xl font-semibold">
          <h2>Jumat</h2>
          <h2>22 Agustus 2025</h2>
        </div>
        <p className="font-semibold text-lg">08.00 WIB</p>
        <p className="text-[#D7BB83] text-2xl my-3">
          <FaMapMarkerAlt />
        </p>
        <h3 className="playfair text-2xl font-semibold">Auditorium Masjid</h3>
        <p className="font-semibold text-xs mx-6 mb-5">
          Jalan Raya Bojongsari No.5, Gunung Putri, Citeureup, Bogor, Jawa Barat
        </p>
        <button className="mt-2 bg-linear-to-r from-[#D7BB83] to-[#A38C5E] text-white px-3 py-2 rounded-full text-sm flex items-center gap-2">
          <FaLocationDot />
          Google Maps
        </button>
      </div>
    </div>
  );
}
