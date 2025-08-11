import { FiMessageCircle } from "react-icons/fi";
import bgImage from "../assets/images/JAWA-PATTERN.webp";
import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import "dayjs/locale/id";
import WishesCard from "./WishesCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale("id");

export default function Wishes() {
  const [name, setName] = useState("");
  const [presence, setPresence] = useState("");
  const [message, setMessage] = useState("");
  const [guests, setGuests] = useState([]);

  const fetchGuests = async () => {
    const { data, error } = await supabase.from("guests").select("*");

    // console.log("Data:", data);
    if (error) {
      console.log("Error:", error);
    }
    setGuests(data || []);
  };

  useEffect(() => {
    fetchGuests();
  }, []);

  const handleSubmit = async () => {
    // console.log("Submitted");
    const { data, error } = await supabase
      .from("guests") // nama tabel
      .insert([{ name, message, presence }]);

    if (error) {
      console.error("Error insert:", error);
    } else {
      console.log("Insert success:", data);
      fetchGuests();
    }
  };
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
      <div className="z-10 flex flex-col justify-center">
        <div className="flex flex-col p-6">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h1 className="text-center font-semibold text-6xl mt-10 ginger">
              Wishes
            </h1>
            <p className="text-center font-semibold">
              Ucapan Selamat, Doa, & Konfirmasi Kehadiran
            </p>
            <div className="flex justify-center">
              <p className="text-center my-5 font-semibold flex items-center gap-2">
                <FiMessageCircle /> {guests.length} Ucapan
              </p>
            </div>
          </motion.div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nama Tamu"
            className="bg-white !text-gray-800 py-2 px-4 rounded-lg mb-4"
          />
          <select
            name="kehadiran"
            value={presence}
            id="kehadiran"
            onChange={(e) => setPresence(e.target.value)}
            className=" bg-white text-gray-800 py-2 px-4 rounded-lg mb-4"
          >
            <option value="">Konfirmasi Kehadiran</option>
            <option value="hadir">Hadir</option>
            <option value="tidak hadir">Tidak Hadir</option>
            <option value="masih ragu">Masih Ragu</option>
          </select>

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis Ucapan"
            className=" bg-white !text-gray-800 py-2 px-4 rounded-lg"
          />
          <div className="flex my-5">
            <button
              onClick={handleSubmit}
              className="bg-[#A38C5E] px-4 py-2 rounded-lg hover:font-bold font-semibold w-32"
            >
              Kirim
            </button>
          </div>
        </div>
        <div className="h-64 mt-10 px-4 overflow-y-scroll w-full custom-scroll">
          {guests.map((item) => (
            <WishesCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      {/* ucapan */}
    </div>
  );
}
