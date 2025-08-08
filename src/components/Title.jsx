/* eslint-disable no-unused-vars */
import bgImage from "../assets/images/JAWA-FALLBACK.webp";
import { motion } from "motion/react";

export default function TitlePage() {
  return (
    <div
      className="bg-center h-screen bg-cover flex items-center justify-center text-white "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.9 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="text-center">
          <h2 className="pinyon text-3xl">The Wedding of</h2>
          <h1 className="ginger text-6xl mt-4 text-[#D7BB83]">Rani</h1>
          <h1 className="ginger italic my-3 text-4xl text-[#D7BB83]">&</h1>
          <h1 className="ginger text-6xl text-[#D7BB83]">Imam</h1>
          <h2 className="ginger mt-5 font-bold text-shadow-2xl">
            24 . 08 . 2025
          </h2>
          <div className="h-[120px]"></div>
        </div>
      </motion.div>
    </div>
  );
}
