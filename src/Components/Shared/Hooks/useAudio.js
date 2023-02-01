import { useEffect, useState } from "react";
import siteAudio from "../../../asstes/Audio/site_audio.mp3";

const useAudio = () => {
  const [audio] = useState(new Audio(siteAudio));
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    console.log("Clicked");
    setPlaying(!playing);
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [audio, playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, [audio]);

  return [playing, setPlaying, toggle];
};

export default useAudio;
