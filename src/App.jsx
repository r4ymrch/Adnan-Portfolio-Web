import { useState } from "react";
import TargetCursor from "./components/TargetCursor";
import Navbar from "./components/Navbar";
import NotificationBar from "./components/Notifications";
import HomeSection from "./components/Home";
import AboutSection from "./components/About";

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
        <Navbar btnClick={handleClick} />
        <NotificationBar
          message="Terimakasih Telah Mendownload 👌"
          positionX={showNotif ? "0%" : "120%"}
        />
        <div className="bg-linear-to-t from-amber-50/10 to-50% w-full h-screen">
          <HomeSection />
        </div>
        <div className="bg-gray-950 border-t-2 border-b-2 border-gray-800 w-full h-screen">
          <AboutSection />
        </div>
      </div>
    </>
  );
}

export default App;
