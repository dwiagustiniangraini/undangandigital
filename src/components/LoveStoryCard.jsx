export default function LoveStoryCard({ photo, title, tanggal, isi }) {
  return (
    <div className="py-6 px-8 text-center w-full">
      <div
        className="h-72 border-4 border-white rounded-2xl shadow-2xl bg-center bg-cover"
        style={{ backgroundImage: `url(${photo})` }}
      ></div>
      <h2 className="mt-5 text-3xl font-semibold playfair">{title}</h2>
      <p className="-mt-1 font-semibold">{tanggal}</p>
      <p className="mt-5 mx-2 text-xs">{isi}</p>
    </div>
  );
}
