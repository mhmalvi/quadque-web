import React, { useState } from "react";
// import Lottie from "lottie-react";
// // import { Helmet } from "react-helmet";
// // import { useSpeechSynthesis } from "react-speech-kit";
// import siteAudio from "../../../../../asstes/Audio/site_audio.mp3";
// import muteImg from "../../../../../asstes/Images/mute.png";
// import unmuteImg from "../../../../../asstes/Images/unmute.png";
// import loaderFile from "../../../../../asstes/Lotties/loader.json";
// // import useBlogs from "../../../../Shared/Hooks/useBlog";
// import Icons from "../../../../Shared/Icons";
// // import { handleFetchBlogBySlug } from "../../../../Shared/services";
// import Navbar from "../../Navbar";
// import SocialLinks from "../../../../Shared/SocialLinks";
import BaseLayout from "../../layout/BaseLayout";
import BlogDetails from "./BlogDetails";

const BlogDetailsLayout = () => {
  // const [mouseHover, setMouseHover] = useState(false);
  // const [openMenus, setOpenMenus] = useState(false);
  // const [muted, setMuted] = useState(true);
  // const navigate = useNavigate();
  // const location = useLocation();
  // const { slug } = useParams();
  const [loader, setLoader] = useState(true);
  // const [blogDetails, setBlogDetails] = useState();

  // const synth = window.speechSynthesis;

  // useEffect(() => {
  //   if (muted) {
  //     document.getElementById("iframeAudio").src = "";
  //   } else {
  //     document.getElementById("iframeAudio").src = siteAudio;
  //   }
  // }, [muted, location, navigate, setLoader, slug, synth]);

  return (
    <BaseLayout>
      <BlogDetails loader={loader} setLoader={setLoader} />
    </BaseLayout>
    // <>
    //   <div className="blog_details w-full h-full">
    //     {/* For website background Audio */}
    //     <iframe
    //       id="iframeAudio"
    //       title="audio"
    //       src={siteAudio}
    //       allow="autoplay loop"
    //       style={{ display: "none" }}
    //     />

    //     <Modal
    //       style={{
    //         backgroundColor: "black !important",
    //         borderRadius: "0",
    //         scrollbarWidth: "none",
    //       }}
    //       open={openMenus}
    //       onCancel={() => setOpenMenus(false)}
    //       footer={false}
    //       width={"100%"}
    //     >
    //       <div
    //         className="absolute top-0 left-0 right-0 h-full w-full"
    //         onClick={() => setOpenMenus(false)}
    //       ></div>
    //       <Navbar setOpenMenus={setOpenMenus} />
    //     </Modal>

    //     {/* Outer Layer */}

    //     {/* Top bar */}
    //     <div className="absolute top-0 z-50 w-full h-10 bg-white"></div>
    //     {/* <div className="w-full h-10 bg-white"></div> */}

    //     <div className="relative flex justify-center bg-white">
    //       {/* Left bar */}
    //       <div className="w-[100px] min-h-full py-10 z-50 absolute left-0 flex flex-col justify-between left_bar bg-white">
    //         <a href="/">
    //           <Icons.BrandLogo className="mx-auto" />
    //         </a>

    //         <div
    //           className="-rotate-90 relative cursor-pointer flex justify-center items-center hover:text-brand-color transition-colors delay-150"
    //           onMouseOver={() => {
    //             setMouseHover(true);
    //           }}
    //           onMouseOut={() => {
    //             setMouseHover(false);
    //           }}
    //           onClick={() => setOpenMenus(true)}
    //         >
    //           <span className="uppercase mr-auto font-semibold text-xl leading-[175%] font_primary pr-4">
    //             menu
    //           </span>
    //           <span>
    //             <div
    //               className={`${
    //                 mouseHover ? "w-[18px] bg-brand-color" : "w-[28px] bg-black"
    //               } float-left transition-all delay-150 ease-in-out h-[3px] mb-2`}
    //             ></div>
    //             <div
    //               className={`${
    //                 mouseHover ? "w-[28px] bg-brand-color" : "w-[18px] bg-black"
    //               }  float-left transition-all delay-200 ease-in-out h-[3px]`}
    //             ></div>
    //           </span>
    //         </div>

    //         <SocialLinks />
    //       </div>

    //       {/* Middle Main container */}
    //       <div
    //         id="main_container"
    //         className="blog_details bg-green-100 main_container w-full h-screen my-auto shadow-md"
    //       >
    //         <BlogDetails setLoader={setLoader} />
    //       </div>

    //       {/* Right bar */}

    //       <div className="relative">
    //         <div className="absolute top-3 right-10 text-lg font-bold text-black z-50">
    //           {muted ? (
    //             <div className="w-8">
    //               <Tooltip
    //                 title="Unmute Sound"
    //                 placement="left"
    //                 color={"rgba(90, 90, 90, 0.7)"}
    //               >
    //                 <div className="text-xl font-bold">&nbsp;</div>
    //                 <img
    //                   className="z-50 cursor-pointer"
    //                   src={muteImg}
    //                   alt="mute logo"
    //                   onClick={() => {
    //                     setMuted(false);
    //                   }}
    //                 />
    //                 <div className="text-xl font-bold">&nbsp;</div>
    //               </Tooltip>
    //             </div>
    //           ) : (
    //             <div className="w-8">
    //               <Tooltip
    //                 title="Mute Sound"
    //                 placement="left"
    //                 color={"rgba(90, 90, 90, 0.7)"}
    //               >
    //                 <div className="text-xl font-bold">&nbsp;</div>
    //                 <img
    //                   className="z-50 cursor-pointer"
    //                   src={unmuteImg}
    //                   onClick={() => {
    //                     setMuted(true);
    //                   }}
    //                   alt="unmute logo"
    //                 />
    //                 <div className="text-xl font-bold">&nbsp;</div>
    //               </Tooltip>
    //             </div>
    //           )}
    //         </div>

    //         <div className="bg-white absolute right-0 h-full">
    //           <div className="w-[100px] flex flex-col justify-between left_bar">
    //             <div>&nbsp;</div>
    //             <div>&nbsp;</div>
    //             <div className="mb-9 -rotate-90 flex justify-center items-center">
    //               <a
    //                 href="#start-project"
    //                 className="uppercase whitespace-nowrap font-semibold text-xl leading-[175%] font_primary mr-4"
    //               >
    //                 start project
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Bottom bar */}
    //     <div className="absolute bottom-0 z-50 w-full h-10 bg-white"></div>

    //     {loader ? (
    //       <div className="w-11/12 min-h-screen flex flex-col justify-center items-center absolute top-0 left-10 bg-black backdrop-blur-md bg-opacity-80">
    //         <Lottie
    //           className="w-1/6 mx-auto"
    //           animationData={loaderFile}
    //           loop={true}
    //         />
    //         <div className="font_title text-3xl font-semibold text-white">
    //           Loading...
    //         </div>
    //       </div>
    //     ) : null}
    //   </div>
    // </>
  );
};

export default BlogDetailsLayout;
