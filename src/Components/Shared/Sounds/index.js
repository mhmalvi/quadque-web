import letsGo from "../../../asstes/Audio/lets-go.wav";
import thankYou from "../../../asstes/Audio/Thank_You.wav";

const letsGoAudio = new Audio(letsGo);
export const handleLetsGoAudio = () => {
  letsGoAudio.play();
};

const thankYouAudio = new Audio(thankYou);
export const handleThankYouAudio = () => {
  thankYouAudio.play();
};
