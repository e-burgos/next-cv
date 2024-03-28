import Image from 'next/image';
import React from 'react';
import CloseImg from '../../../../../public/assets/img/cancel.svg';
import { IPortfolioData } from '@/data/portfolio';
import Slider from 'react-slick';

interface Props {
  data?: IPortfolioData;
  setGetModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalOne = ({ data, setGetModal }: Props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
  };

  if (!data) return null;

  return (
    <div className="modal_portfolio ">
      <div className="modal__outside" onClick={() => setGetModal(false)}></div>
      <div></div>
      <div className="modal__content">
        <div key={data.id} data-aos="fade">
          <h2 className="heading mb-2">{data.type}</h2>
          <div className="modal__details">
            {data.modalDetails.map((details, i) => {
              return (
                <div key={i} className="row open-sans-font">
                  <div className="col-12 col-sm-6 mb-2">
                    <i className="fa fa-file-text-o pr-2"></i>
                    Project:{' '}
                    <span className="ft-wt-600 uppercase">
                      {details.project}
                    </span>
                  </div>
                  <div className="col-12 col-sm-6 mb-2">
                    <i className="fa fa-user-o pr-2"></i>
                    Client :{' '}
                    <span className="ft-wt-600 uppercase">
                      {details.client}
                    </span>
                  </div>
                  <div className="col-12 col-sm-6 mb-2">
                    <i className="fa fa-code pr-2"></i>
                    Language :{' '}
                    <span className="ft-wt-600 uppercase">
                      {details.language}
                    </span>
                  </div>
                  <div className="col-12 col-sm-6 mb-2">
                    <i className="fa fa-external-link pr-2"></i>
                    Preview :{' '}
                    <a
                      className="preview-link"
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      href={details.link}
                    >
                      {details.preview}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
          {(!data.modalType || data.modalType === 'image') && (
            <figure className="modal__img">
              <Image src={data.image} alt="portfolio project demo" />
            </figure>
          )}

          {data.modalType === 'youtube' && (
            <figure className="modal__img videocontainer">
              <iframe
                src={data?.videoLink}
                title="YouTube video player"
                className="youtube-video"
                allowFullScreen
              ></iframe>
            </figure>
          )}

          {data.modalType === 'slider' && (
            <figure className="modal__img">
              <Slider {...settings}>
                <div>
                  <Image src={data.image} alt={data.type} />
                </div>
                {data?.sliderImages?.map((img, i) => {
                  return (
                    <div key={i}>
                      <Image src={img} alt={data.type} />
                    </div>
                  );
                })}
              </Slider>
            </figure>
          )}

          <button className="close-modal" onClick={() => setGetModal(false)}>
            <Image src={CloseImg} alt="portfolio project demo" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalOne;
