import { useRef, useState } from "react";
import Home from "../components/Home";
import Kiri from "../components/Kiri";
import Profile from "../components/Profile";
import SaveTheDate from "../components/SaveTheDate";
import SayThanks from "../components/SayThanks";
import Slideshow from "../components/Slideshow";
import Tiga from "../components/Tiga";
import TitlePage from "../components/Title";
import Wishes from "../components/Wishes";
import bgImage from "../assets/images/JAWA-BACKGROUND.webp";
import LoveStory from "./LoveStory";
import Video from "./Video";
import scrollIntoView from "scroll-into-view";
import { FaCompactDisc, FaPause } from "react-icons/fa6";
import { FaPauseCircle } from "react-icons/fa";
import lagu from "../assets/lagu-jawa-gamelan.mp3";
import Gallery from "./Gallery";
import { Toaster } from "react-hot-toast";

export default function Wrapper() {
  const [isActive, setIsActive] = useState(false);
  const scrollTargetRef = useRef(null);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current
        .play()
        .catch((err) => console.error("Audio play error:", err));
    }
    setIsPlaying(!isPlaying);
  };

  const handleButton = () => {
    setIsActive(true);
    setTimeout(() => {
      scrollIntoView(scrollTargetRef.current, {
        time: 3000,
        align: {
          top: 0.1,
        },
      });
    });
    setIsPlaying(true);
    audioRef.current.play();
  };

  return (
    <div className="flex h-screen relative !overflow-x-hidden">
      <div className={`absolute z-30 ${!isActive ? "hidden" : ""}`}>
        <audio ref={audioRef} src={lagu} loop></audio>
        <button
          onClick={togglePlay}
          className="fixed bottom-4 right-4 p-4 bg-white rounded-full shadow-lg flex items-center justify-center"
        >
          {isPlaying ? (
            <FaCompactDisc className="text-2xl text-yellow-500 animate-spin-slow" />
          ) : (
            <FaPauseCircle className="text-2xl text-yellow-500" />
          )}
        </button>
      </div>

      <Kiri />
      <div
        className="w-full lg:w-[30%] overflow-y-scroll overflow-x-hidden bg-center bg-cover h-screen"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <Home handleButton={handleButton} />
        {isActive ? (
          <>
            <div ref={scrollTargetRef}>
              <TitlePage />
            </div>
            <Tiga />
            <Profile />
            <Slideshow />
            <SaveTheDate />
            <Video />
            <Gallery />
            <LoveStory />
            <Wishes />
            <SayThanks />
            <Toaster position="top-center" reverseOrder={false} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
