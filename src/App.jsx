import "./App.css";
import "./index.css";
// import welcomeAvatar from "./asstes/Images/welcome_avatar.gif";
import { Breakpoint, BreakpointProvider } from "react-socks";
import DesktopLayout from "./Components/Pages/DesktopVersion/layout";
import MobileLayout from "./Components/Pages/MobileVersion/layout";
import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   console.log = () => {};
  //   console.warn = () => {};
  // }, []);

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
