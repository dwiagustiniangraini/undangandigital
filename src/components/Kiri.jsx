import BgImage from "../assets/images/JAWA-BACKGROUND.webp";

export default function Kiri() {
  return (
    <div
      className="hidden text-white w-[70%] md:flex items-center justify-center flex-col bg-cover bg-bottom"
      style={{
        backgroundImage: `linear-gradient(180deg, #02010100 0%, #000000 100%), url(${BgImage})`,
      }}
    >
      <h2 className="pinyon text-4xl">The Wedding Of</h2>
      <h2 className="ginger text-6xl">Rani & Imam</h2>
      <p className="playfair text-3xl">22 . 08 . 2025</p>
      <p className="playfair text-3xl">24 . 08 . 2025</p>
    </div>
  );
}
