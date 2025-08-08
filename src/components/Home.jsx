import { FaLeaf } from "react-icons/fa6";
import bgImage from "../assets/images/DDD_3185.webp";
import { useSearchParams } from "react-router-dom";

export default function Home({ handleButton }) {
  const [searchParams] = useSearchParams();
  const namaTamu = searchParams.get("to");

  return (
    <div
      className="h-screen text-white text-center flex justify-between flex-col bg-center bg-cover"
      style={{
        backgroundImage: `linear-gradient(
                    rgba(0, 0, 0, 0.5),
                    rgba(0, 0, 0, 0.5)
                  ), url(${bgImage})`,
      }}
    >
      <div className="mt-20">
        <h1 className="pinyon text-2xl mb-4">The Wedding Of</h1>
        <h2 className="ginger  text-5xl">Rani & Imam</h2>
      </div>
      <div className="mb-20 flex flex-col justify-center items-center gap-3">
        <p>Kepada Yth. Bapak/Ibu/Saudara/i</p>
        <p className="text-lg">{namaTamu ? namaTamu : "Nama Tamu"}</p>
        <button
          onClick={handleButton}
          className="flex font-semibold items-center justify-center gap-2 py-2 mb-5 border-2 border-solid rounded-[20px]  bg-gradient-to-r from-[#D7BB83] to-[#A38C5E] w-1/2"
        >
          <FaLeaf />
          Buka Undangan
        </button>
        <p className="text-xs">
          *Mohon maaf apabila ada kesalahan penulisan nama/gelar
        </p>
      </div>
    </div>
  );
}
