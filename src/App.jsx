import { useState } from "react";
import TargetCursor from "./components/TargetCursor";
import Navbar from "./components/Navbar";
import NotificationBar from "./components/Notifications";
import HomeSection from "./components/Home";

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
        <div className="bg-linear-to-t from-amber-50/10 to-90% w-full h-screen">
          <Navbar btnClick={handleClick} />
          <NotificationBar
            message="Terimakasih Telah Mendownload 👌"
            positionX={showNotif ? "0%" : "120%"}
          />
          <HomeSection />
        </div>
      </div>
    </>
  );
}

export default App;
