import batikAtas from "../assets/images/JAWA-MOTIF-ATAS.webp";
import LoveStoryCard from "./LoveStoryCard";
import perkenalanImg from "../assets/images/DDD_3089.jpg";
import lamaran from "../assets/images/WhatsApp Image 2025-08-08 at 15.56.47.jpeg";
import nikah from "../assets/images/DDD_3336.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function LoveStory() {
  const arr = [
    {
      photo: perkenalanImg,
      title: "Pendekatan",
      // tanggal: "15 Februari 2020",
      isi: "Tidak ada yang kebetulan di dunia ini, semua sudah tersusun rapi oleh sang maha kuasa. kita tidak bisa memilih pada siapa kita jatuh cinta, dari kecil kita sudah saling kenal karena kami tetangga dekat. Tidak ada yang pernah menyangka bahwa jodoh kami adalah tetangga dekat.",
    },
    {
      photo: lamaran,
      title: "Lamaran",
      // tanggal: "15 Februari 2020",
      isi: "Setelah begitu banyak melewati proses dan rintangan dalam hubungan, kehendak-Nya menuntun kami pada  sebuah ikatan yang tidak disangka hingga akhirnya 15 Juni 2025 membawa kami melangsungkan lamaran.",
    },
    {
      photo: nikah,
      title: "Pernikahan",
      // tanggal: "15 Februari 2020",
      isi: "Percayalah, bukan karena bertemu lalu berjodoh tetapi karena berjodohlah maka kami dipertemukan. Kami memutuskan untuk mengikrarkan janji suci pernikahan kami pada tanggal 22 Agustus 2025, insha allah sebagaimana yang pernah dikatakan oleh Sayidina Ali bin Abi Thalib ''apa yang menjadi takdirmu akan menemukan jalannya untuk menemukanmu''. ",
    },
  ];

  return (
    <div className="relative bg-white/60 min-h-screen pb-16">
      <img src={batikAtas} alt="" className="absolute" />
      <div className="content flex flex-col items-center justify-center">
        <h1 className="text-center mt-10  text-6xl pinyon">Love Story</h1>
        {arr.map((item, idx) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <LoveStoryCard
              key={idx}
              photo={item.photo}
              title={item.title}
              tanggal={item.tanggal}
              isi={item.isi}
            />
          </motion.div>
        ))}
      </div>
      <div></div>
    </div>
  );
}
