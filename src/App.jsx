import "./App.css";
import "./index.css";
// import welcomeAvatar from "./asstes/Images/welcome_avatar.gif";
import DesktopLayout from "./Components/Pages/DesktopVersion/layout";
import MobileLayout from "./Components/Pages/MobileVersion/layout";
import { Breakpoint, BreakpointProvider } from "react-socks";
import { Route, Routes } from "react-router-dom";
import BlogGallery from "./Components/Pages/MobileVersion/Blog/BlogGallery";

function App() {
  // const [showWelcome, setShowWelcome] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setShowWelcome(true);
  //   }, 3000);
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



      {/* <div
        className={`${
          showWelcome
            ? "w-80 transition-all delay-700 ease-in-out"
            : "w-0 transition-all delay-700 ease-in-out"
        } w-0 transition-all delay-700 ease-in-out absolute top-0 right-0 flex items-center`}
      >
        <div className="flex items-center relative">
          <span className="bg-white px-4 py-2 rounded-md shadow-md">
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
            onClick={() => setShowWelcome(false)}
          >
            <span className="-mt-1">x</span>
          </div>
        </div>
        <img className="w-36" src={welcomeAvatar} alt="" />
      </div> */}
    </>
  );
}

export default App;
