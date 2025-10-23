import { useState } from "react";
import TargetCursor from "./components/TargetCursor";
import Navbar from "./components/Navbar";
import NotificationBar from "./components/Notifications";
import Particles from "./components/Particles";
import HomeSection from "./components/Home";
import AboutSection from "./components/About";
import SkillsSection from "./components/Skills";

function App() {
  const [showNotif, setShowNotif] = useState(false);
  const handleClick = () => {
    setShowNotif(true);
    setTimeout(() => {
      setShowNotif(false);
    }, 3000);
  };

  return (
    <>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <div className="bg-gray-950 text-amber-50 font-poppins">
        <Navbar />
        <NotificationBar
          message="Terimakasih Telah Mendownload 👌"
          positionX={showNotif ? "0%" : "120%"}
        />
        <div className="bg-linear-to-t from-amber-50/10 to-50% w-full h-screen">
          <Particles
            alphaParticles
            particleCount={300}
            speed={0.05}
          />
          <HomeSection />
        </div>
        <div className="bg-gray-950 border-t-2 border-b-2 border-gray-800 w-full h-full">
          <AboutSection btnClick={handleClick} />
          <SkillsSection />
        </div>
      </div>
    </>
  );
}

export default App;
