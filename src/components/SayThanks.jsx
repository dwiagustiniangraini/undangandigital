import bgImage from "../assets/images/DDD_3249.jpg";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function SayThanks() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center p-6"
      style={{
        backgroundImage: `linear-gradient(
                rgba(0, 0, 0, 0.6),
                rgba(0, 0, 0, 0.6)
              ),url(${bgImage})`,
      }}
    >
      <div className="text-white text-center flex items-center flex-col h-screen justify-center px-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <h2 className="ginger text-5xl mb-5">Rani & Imam</h2>
          <p className=" text-md">
            Suatu kebahagiaan & kehormatan bagi kami, apabila
            Bapak/Ibu/Saudara/i, berkenan hadir dan memberikan do'a restu kepada
            kami
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p className="text-md text-gray-400 font-semibold mt-10">
            Dibuat oleh : AditiyaRS
          </p>
        </motion.div>
      </div>
    </div>
  );
}
