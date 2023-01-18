import "./App.css";
import "./index.css";
// import welcomeAvatar from "./asstes/Images/welcome_avatar.gif";
import { useEffect, useState } from "react";
import { Breakpoint, BreakpointProvider } from "react-socks";
import DesktopLayout from "./Components/Pages/DesktopVersion/layout";
import MobileLayout from "./Components/Pages/MobileVersion/layout";
import welcomeAvatar from "./asstes/Images/welcome_avatar.json";
import Lottie from "lottie-react";
import { Alert, Button, Space } from "antd";
import siteAudio from "./asstes/Audio/site_audio.mp3";

function App() {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("welcome")) {
      setTimeout(() => {
        setShowWelcome(true);
      }, 3000);
    }
  }, []);

  return (
    <>
      <BreakpointProvider>
        <Breakpoint large up>
          <DesktopLayout />
        </Breakpoint>
        <Breakpoint large down>
          <MobileLayout />
        </Breakpoint>
      </BreakpointProvider>

      <div
        className={`${
          showWelcome
            ? "w-86 transition-all delay-700 ease-in-out"
            : "w-0 transition-all delay-700 ease-in-out"
        } transition-all delay-700 ease-in-out absolute top-0 right-0 z-50 flex items-center`}
      >
        <div className="flex items-center relative">
          <span className="bg-white px-4 py-2.5 font-semibold font_title rounded-md shadow-md">
            Hi There, Welcome
          </span>
          <div className="bg-white w-4 h-4 -ml-2.5 rotate-45 rounded-sm">
            &nbsp;
          </div>

          <div
            className={`${
              showWelcome
                ? "w-6 h-6 transition-all delay-700 ease-in-out"
                : "w-0 h-0 transition-all delay-700 ease-in-out"
            } absolute -top-2 -left-3 rounded-full flex justify-center items-center bg-gray-700 text-white cursor-pointer`}
            onClick={() => {
              setShowWelcome(false);
              localStorage.setItem("welcome", false);
            }}
          >
            <span className="-mt-1">x</span>
          </div>
        </div>

        {/* <img className="w-36" src={welcomeAvatar} alt="" /> */}
        <Lottie
          className="w-36 mx-auto"
          animationData={welcomeAvatar}
          loop={true}
        />
      </div>

      {/* <div className=" absolute top-14 left-28 z-50">
        <Alert
          // className="bg-yellow-100"
          message="Sound Permission Alert"
          description="Please accept to enable background music"
          action={
            <Space direction="horizontal" className="mt-auto ml-4">
              <div className="flex items-center">
                <button className="text-white rounded-md px-2.5 py-0.5 bg-brand-color">
                  Accept
                </button>
                <button className="text-white ml-3 rounded-md px-2.5 py-0.5 bg-black">
                  Decline
                </button>
              </div>
            </Space>
          }
        />
      </div> */}
    </>
  );
}

export default App;
