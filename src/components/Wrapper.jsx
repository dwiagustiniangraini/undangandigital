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

export default function Wrapper() {
  const [isActive, setIsActive] = useState(false);
  const scrollTargetRef = useRef(null);

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
  };

  return (
    <div className="flex h-screen relative !overflow-x-hidden">
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
            <LoveStory />
            <Wishes />
            <SayThanks />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
