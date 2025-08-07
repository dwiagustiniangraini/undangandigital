/* eslint-disable no-unused-vars */
import photo from "../assets/images/Jawa-9-1.webp";
import bgImage from "../assets/images/JAWA-BACKGROUND.webp";
import pattern from "../assets/images/JAWA-PATTERN.webp";
import batikAtas from "../assets/images/JAWA-MOTIF-ATAS.webp";
import batikBawah from "../assets/images/JAWA-MOTIF-BAWAH.webp";
import { motion } from "motion/react";
export default function Tiga() {
  return (
    <div className="min-h-screen relative bg-color-transparent bg-radial from-[#92614B] from-0% to-[#472A1C] to-80% flex items-center">
      {/* <div className="min-h-screen relative "> */}
      {/* Foto pertama */}
      <div
        className="absolute h-screen bg-center inset-0"
        style={{
          backgroundColor: "#5C4324",
          backgroundImage: `url(${pattern})`,
          backgroundSize: "150px auto",
          mixBlendMode: "multiply",
          transition: "background 0.3s, border-radius 0.3s, opacity 0.3s",
        }}
      ></div>

      <div
        className="absolute inset-0 bg-no-repeat bg-top bg-[length:100%_auto]"
        style={{ backgroundImage: `url(${batikAtas})` }}
      ></div>
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom bg-[length:100%_auto]"
        style={{ backgroundImage: `url(${batikBawah})` }}
      ></div>

      <div className="card p-6">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div
            className="h-[420px] rounded-3xl bg-cover bg-center relative !z-10"
            style={{
              backgroundImage: `url(${photo})`,
            }}
          ></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div
            className="h-[400px] bg-cover rounded-3xl  -mt-10 p-6 text-center flex flex-col items-center justify-center relative !z-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(${bgImage})`,
            }}
          >
            <div
              className="absolute inset-0 bg-no-repeat bg-top bg-[length:100%_auto]"
              style={{ backgroundImage: `url(${batikAtas})` }}
            ></div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.9 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <h1 className="text-5xl ginger font-semibold my-10">R & I</h1>
              <p className="italic text-sm max-w-xl">
                "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan
                pasangan-pasangan untukmu dari jenismu sendiri, agar kamu
                cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
                antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
                benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum
                yang berpikir."
              </p>
              <h2 className="mt-4 font-semibold infant text-lg">
                - QS. Ar-Rum : 21 -
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
