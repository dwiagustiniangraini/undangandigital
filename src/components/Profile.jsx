import batikAtas from "../assets/images/JAWA-MOTIF-ATAS.webp";
import batikBawah from "../assets/images/JAWA-MOTIF-BAWAH.webp";
import mempelaiWanita from "../assets/images/Jawa-21-1.jpg";
import wayangKiri from "../assets/images/JAWA-COUPLE-1.webp";
import bunga from "../assets/images/JAWA-COUPLE-2.webp";
import wayangKanan from "../assets/images/JAWA-COUPLE-3.webp";
import bungaReverse from "../assets/images/JAWA-COUPLE-4.webp";
import mempelaiPria from "../assets/images/Jawa-21-2.jpg";
import { FaInstagram } from "react-icons/fa6";
import wayang from "../assets/images/JAWA-GUNUNGAN.webp";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

export default function Profile() {
  return (
    <div className="relative min-h-screen p-[30px] ">
      <div className="bg-white/80 rounded-full shadow-lg overflow-hidden border-4 border-[#D4AF37]">
        <img src={batikAtas} alt="" className="-mb-50" />
        <div className="relative z-10 max-w-md mx-auto px-4 pt-12 text-center pb-0">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <img src={wayang} alt="icon" className="mx-auto w-20 mb-4" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.9 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h2 className="pinyon text-4xl mt-10">We Are</h2>
            <h2 className="pinyon text-4xl">Getting Married!</h2>
            <p className="text-sm mt-5 font-semibold mx-12">
              Maha Suci Allah yang telah mencipatakan makhluk-Nya
              berpasang-pasangan. Ya Allah semoga ridho-Mu tercurah mengiringi
              pernikahan kami:
            </p>
          </motion.div>

          {/* Mempelai Wanita */}
          <div className="mt-8">
            {/* <div className="relative w-40 h-80 mx-auto overflow-hidden rounded-full border-2 border-[#D7BB83] shadow-[5px_5px_5px_rgba(0,0,0,0.3)] transition-all duration-300 m-0 mb-[50px] p-0">
              <img
                src={mempelaiWanita}
                alt=""
                className="w-full h-full object-cover"
              />
            </div> */}

            <div className="relative w-40 h-80 mx-auto mb-[50px]">
              {/* Wayang di belakang */}
              <img
                src={wayangKiri}
                alt="Wayang"
                className="absolute inset-0 w-full h-full object-contain z-0 -translate-x-14 translate-y-10"
              />

              {/* Foto mempelai */}

              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.9 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <div className="relative z-10 w-full h-full overflow-hidden rounded-full border-2 border-[#D7BB83] shadow-[5px_5px_5px_rgba(0,0,0,0.3)] transition-all duration-300">
                  <img
                    src={mempelaiWanita}
                    alt="Mempelai Wanita"
                    className="w-full h-full object-cover "
                  />
                </div>
              </motion.div>

              {/* Bunga di depan bagian bawah */}
              <img
                src={bunga}
                alt="Bunga"
                className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-24 z-20"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.9 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <h3 className="mt-4 pinyon text-6xl">Rani</h3>
              <p className="playfair text-[20px]">
                Dwi Agustini Angraini, S.Pd
              </p>
              <p className="text-sm font-semibold">Anak Ke Dua dari</p>
              <p className="text-sm font-semibold">
                Bapak M. Yani, S.Pd., M.Si & Ibu Jumiatin, S.Pd
              </p>
              <div className="flex justify-center">
                {/*     background-image: linear-gradient(90deg, #D7BB83 0%, #A38C5E 100%); */}
                <a href="https://www.instagram.com/dwiiangrainii/">
                  <button className="mt-2 bg-linear-to-r from-[#D7BB83] to-[#A38C5E] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <FaInstagram />
                    mempelai
                  </button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* separator */}
          <div className="text-6xl my-16 ginger font-semibold">&</div>

          {/* Mempelai pria */}
          <div>
            <div className="relative w-40 h-80 mx-auto mb-[50px]">
              {/* Wayang di belakang */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.9 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <img
                  src={wayangKanan}
                  alt="Wayang"
                  className="absolute inset-0 w-full h-full object-contain z-0 translate-x-14 translate-y-10"
                />

                {/* Foto mempelai */}
                <div className="relative z-10 w-full h-full overflow-hidden rounded-full border-2 border-[#D7BB83] shadow-[5px_5px_5px_rgba(0,0,0,0.3)] transition-all duration-300">
                  <img
                    src={mempelaiPria}
                    alt="Mempelai Pria"
                    className="w-full h-full object-cover "
                  />
                </div>
              </motion.div>

              {/* Bunga di depan bagian bawah */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.9 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <img
                  src={bungaReverse}
                  alt="Bunga"
                  className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-24 z-20"
                />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.9 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <h3 className="mt-4 pinyon text-6xl">Imam</h3>
              <p className="playfair text-[20px] mt-3">
                M. Imam Satria Putra, S.Pd
              </p>
              <p className="text-sm font-semibold">Anak Ke Dua dari</p>
              <p className="text-sm font-semibold">
                Bapak Drs. Sumanto, M.Si (Alm) & Ibu Suparmi, S.Ag
              </p>
              <div className="flex justify-center">
                {/*     background-image: linear-gradient(90deg, #D7BB83 0%, #A38C5E 100%); */}
                <a href="https://www.instagram.com/muhammadimamsp/">
                  <button className="mt-2 bg-linear-to-r from-[#D7BB83] to-[#A38C5E] text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
                    <FaInstagram />
                    mempelai
                  </button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        <img src={batikBawah} alt="" className="" />
      </div>
    </div>
  );
}
