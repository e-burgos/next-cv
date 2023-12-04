import React from "react";
import ModalOne from "./modal-by-id/modal-one";
import ModalTwo from "./modal-by-id/modal-two";
import ModalThree from "./modal-by-id/modal-three";
import ModalFour from "./modal-by-id/modal-four";
import ModalFive from "./modal-by-id/modal-five";
import ModalSix from "./modal-by-id/modal-six";
import ModalSeven from "./modal-by-id/modal-seven";
import ModalEight from "./modal-by-id/modal-eight";
import ModalNine from "./modal-by-id/modal-nine";

interface Props {
  modalId: number;
  setGetModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalMain = ({ modalId, setGetModal }: Props) => {
  if (modalId === 1) {
    return <ModalOne modalId={modalId} setGetModal={setGetModal} />;
  } else if (modalId === 2) {
    return <ModalTwo modalId={modalId} setGetModal={setGetModal} />;
  } else if (modalId === 3) {
    return <ModalThree modalId={modalId} setGetModal={setGetModal} />;
  } else if (modalId === 4) {
    return <ModalFour modalId={modalId} setGetModal={setGetModal} />;
  } else if (modalId === 5) {
    return <ModalFive modalId={modalId} setGetModal={setGetModal} />;
  } else if (modalId === 6) {
    return <ModalSix modalId={modalId} setGetModal={setGetModal} />;
  } else if (modalId === 7) {
    return <ModalSeven modalId={modalId} setGetModal={setGetModal} />;
  } else if (modalId === 8) {
    return <ModalEight modalId={modalId} setGetModal={setGetModal} />;
  } else if (modalId === 9) {
    return <ModalNine modalId={modalId} setGetModal={setGetModal} />;
  }
};

export default ModalMain;
