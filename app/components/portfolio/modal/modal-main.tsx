import React from 'react';
import ModalOne from './modal-by-id/modal-one';
import { IPortfolioData } from '@/data/portfolio';

interface Props {
  modalData?: IPortfolioData;
  setGetModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalMain = ({ modalData, setGetModal }: Props) => {
  return <ModalOne data={modalData} setGetModal={setGetModal} />;
};

export default ModalMain;
