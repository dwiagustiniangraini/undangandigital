import { FiMessageCircle } from "react-icons/fi";
import bgImage from "../assets/images/JAWA-PATTERN.webp";

export default function Wishes() {
  return (
    <div className=" text-white flex-col  relative bg-color-transparent bg-radial from-[#92614B] from-0% to-[#472A1C] to-80% flex items-center">
      {/* <div className="min-h-screen relative "> */}
      {/* Foto pertama */}
      <div
        className="absolute bg-center inset-0 z-0"
        style={{
          backgroundColor: "#5C4324",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "150px auto",
          mixBlendMode: "multiply",
          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
        }}
      ></div>
      <div className="z-10 flex flex-col justify-center p-6">
        <div className="flex flex-col">
          <h1 className="text-center font-semibold text-6xl mt-10 ginger">
            Wishes
          </h1>
          <p className="text-center font-semibold">
            Ucapan Selamat, Doa, & Konfirmasi Kehadiran
          </p>
          <div className="flex justify-center">
            <p className="text-center my-5 font-semibold flex items-center gap-2">
              <FiMessageCircle /> 2 Ucapan
            </p>
          </div>
          <input
            type="text"
            placeholder="Nama Tamu"
            className="bg-white !text-gray-800 py-2 px-4 rounded-lg mb-4"
          />
          <select
            name="kehadiran"
            id="kehadiran"
            className=" bg-white text-gray-800 py-2 px-4 rounded-lg mb-4"
          >
            <option value="">Konfirmasi Kehadiran</option>
            <option value="">Hadir</option>
            <option value="">Tidak Hadir</option>
            <option value="">Masih Ragu</option>
          </select>

          <textarea
            name=""
            id=""
            placeholder="Tulis Ucapan"
            className=" bg-white !text-gray-800 py-2 px-4 rounded-lg"
          />
          <div className="flex my-5">
            <button className="bg-[#A38C5E] px-4 py-2 rounded-lg hover:font-bold font-semibold w-32">
              Kirim
            </button>
          </div>
        </div>

        <div className="flex gap-3 justify-start mb-10">
          <div>
            <h2>Ninda</h2>
            <p>
              MasyaAllah akhirnya ya wak elmaaaakuu, lancar lancar sampai hari H
              ya wak menjadi keluarga yang sakinah mawadah dan warhmahh
              Aaaamiin🙏🙏
            </p>
            <p className="text-sm italic text-gray-400">
              5 bulan, 2 minggu yang lalu
            </p>
          </div>
        </div>
      </div>

      {/* ucapan */}
    </div>
  );
}
