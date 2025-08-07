import batikAtas from "../assets/images/JAWA-MOTIF-ATAS.webp";
import photo from "../assets/images/Jawa-14-1.webp";
import LoveStoryCard from "./LoveStoryCard";

export default function LoveStory() {
  const arr = [
    {
      title: "Perkenalan",
      tanggal: "15 Februari 2020",
      isi: "Kami bertemu ditempat kerja. Pada saat itu, aku adalah karyawan yang ada ditempat magang dia. akhirnya aku beranikan diri untuk menyatakan cinta padanya. Dari situlah hubungan kami dimulai.",
    },
    {
      title: "Lamaran",
      tanggal: "15 Februari 2020",
      isi: "Setelah begitu banyak melewati banyak proses dan rintangan dalam hubungan, akhirnya aku memutuskan untuk melamar dia pada tanggal 13 September 2023. Kami pun tidak menyangka bahwa cerita pertemuan ini menjadi penuh makna.",
    },
    {
      title: "Pernikahan",
      tanggal: "15 Februari 2020",
      isi: "Pada tanggal 23 September 2023, kami melangsungkan akad nikah & Resepsi dengan sederhana dan penuh hikmat. Dengan semua doa restu dari keluarga dan teman-teman, aku dan pasangan telah siap untuk menempuh hidup bersama dan menjalankan ibadah paling indah ini.",
    },
  ];

  return (
    <div className="relative bg-white/60 min-h-screen pb-16">
      <img src={batikAtas} alt="" className="absolute" />
      <div className="content flex flex-col items-center justify-center">
        <h1 className="text-center mt-10  text-6xl pinyon">Love Story</h1>
        {arr.map((item) => (
          <LoveStoryCard
            photo={photo}
            title={item.title}
            tanggal={item.tanggal}
            isi={item.isi}
          />
        ))}
      </div>
      <div></div>
    </div>
  );
}
