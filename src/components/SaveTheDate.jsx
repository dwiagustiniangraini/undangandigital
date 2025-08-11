import { FaRegBookmark } from "react-icons/fa6";
import wayang from "../assets/images/JAWA-GUNUNGAN.webp";
import Acara from "./Acara";
import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function SaveTheDate() {
  const targetDate = "2025-08-24";

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (!newTimeLeft) {
        clearInterval(timer); // stop when countdown is done
      }
    }, 1000);

    return () => clearInterval(timer); // cleanup
  }, [targetDate]);

  if (!timeLeft) {
    return <div className="text-center">🎉 Acara telah dimulai!</div>;
  }
  return (
    <div className="bg-[#472a1c] text-white text-center">
      <div className="flex flex-col items-center justify-center mb-20 p-5">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.9 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <img src={wayang} alt="" className="w-[85px] mb-7 mt-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.9 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="text-5xl pinyon">Save The Date</h2>
          <div className="flex flex-row w-full mb-5 gap-4 items-center justify-center  text-[#472A1C] p-6">
            <div className="kotak p-5  w-[64px] bg-[#FFFCF3] rounded-lg font-semibold items-center justify-center flex flex-col">
              {/* <p className="text-4xl playfair">515</p> */}
              <p className="text-4xl playfair">{timeLeft.days}</p>
              <p>Days</p>
            </div>
            <div className="kotak p-5 w-[64px] bg-[#FFFCF3] rounded-lg font-semibold items-center justify-center flex flex-col">
              <p className="text-4xl playfair">{timeLeft.hours}</p>
              <p>Hours</p>
            </div>
            <div className="kotak p-5 w-[64px] bg-[#FFFCF3] rounded-lg font-semibold items-center justify-center flex flex-col">
              <p className="text-4xl playfair">{timeLeft.minutes}</p>
              <p>Minutes</p>
            </div>
            <div className="kotak p-5 w-[64px] bg-[#FFFCF3] rounded-lg font-semibold items-center justify-center flex flex-col">
              <p className="text-4xl playfair">{timeLeft.seconds}</p>
              <p>Seconds</p>
            </div>
          </div>
          <p className="mb-5 text-sm mx-4">
            Dengan memohon rahmat dan ridho Allah SWT, kami mengundang
            Bapak/Ibu/Saudara/i, untuk menghadiri acara pernikahan kami:
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.9 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <a href="https://www.google.com/calendar/render?action=TEMPLATE&text=The+Wedding+of+Rani+%26amp%3B+Imam&dates=20250824T010000Z%2F20250824T090000Z">
            <button className="flex items-center gap-2 border-2 px-5 py-3 border-white rounded-full bg-[#472A1C]">
              <FaRegBookmark />
              Add to Calendar
            </button>
          </a>
        </motion.div>
      </div>

      {/* section */}
      <div className="p-6 flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.9 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Acara
            title="Akad Nikah"
            tanggal="22 Agustus 2025"
            jam="14.00"
            hari="Jum'at"
            lokasi="Rumah Mempelai Wanita"
            alamat="Perum. Tanah Mas Azhar Blok C4 No.04 RT 28 RW 05, Kec. Talang Kelapa Kab. Banyuasin, Sumatera Selatan "
            linkmap="https://maps.app.goo.gl/DFFJ8C7xgrP8NXE47"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.9 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Acara
            title="Resepsi"
            tanggal="24 Agustus 2025"
            jam="09.00"
            hari="Minggu"
            lokasi="Gedung Balai Diklat Penerbangan"
            alamat="Politeknik Penerbangan Palembang, Sukodadi, Kec. Sukarami, Kota Palembang, Sumatera Selatan 30961"
            linkmap="https://maps.app.goo.gl/DN338xxg3vviZKP79"
          />
        </motion.div>
      </div>
    </div>
  );
}
