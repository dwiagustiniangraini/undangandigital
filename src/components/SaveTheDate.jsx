import { FaRegBookmark } from "react-icons/fa6";
import wayang from "../assets/images/JAWA-GUNUNGAN.webp";
import Acara from "./Acara";

// https://www.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Rani+%26amp%3B+Imam&dates=20250824T010000Z%2F20250824T090000Z

export default function SaveTheDate() {
  return (
    <div className="bg-[#472a1c] text-white text-center">
      <div className="flex flex-col items-center justify-center mb-20 p-5">
        <img src={wayang} alt="" className="w-[85px] mb-7 mt-10" />
        <h2 className="text-5xl pinyon">Save The Date</h2>
        <div className="flex flex-row w-full mb-5 gap-4 items-center justify-center  text-[#472A1C] p-6">
          <div className="kotak p-5  w-[64px] bg-[#FFFCF3] rounded-lg font-semibold items-center justify-center flex flex-col">
            <p className="text-4xl playfair">515</p>
            <p>Days</p>
          </div>
          <div className="kotak p-5 w-[64px] bg-[#FFFCF3] rounded-lg font-semibold items-center justify-center flex flex-col">
            <p className="text-4xl playfair">515</p>
            <p>Hours</p>
          </div>
          <div className="kotak p-5 w-[64px] bg-[#FFFCF3] rounded-lg font-semibold items-center justify-center flex flex-col">
            <p className="text-4xl playfair">515</p>
            <p>Minutes</p>
          </div>
          <div className="kotak p-5 w-[64px] bg-[#FFFCF3] rounded-lg font-semibold items-center justify-center flex flex-col">
            <p className="text-4xl playfair">515</p>
            <p>Seconds</p>
          </div>
        </div>
        <p className="mb-5 text-sm mx-4">
          Dengan memohon rahmat dan ridho Allah SWT, kami mengundang
          Bapak/Ibu/Saudara/i, untuk menghadiri acara pernikahan kami:
        </p>

        <button className="flex items-center gap-2 border-2 px-5 py-3 border-white rounded-full bg-[#472A1C]">
          <FaRegBookmark />
          Add to Calendar
        </button>
      </div>

      {/* section */}
      <div className="p-6 flex flex-col gap-10">
        <Acara title="Akad Nikah" />
        <Acara title="Resepsi" />
      </div>
    </div>
  );
}
