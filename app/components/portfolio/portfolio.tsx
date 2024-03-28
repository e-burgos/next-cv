import React, { FC, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Image from 'next/image';
import ModalMain from './modal/modal-main';
import { IModalType, IPortfolio, IPortfolioData, ITag } from '@/data/portfolio';

interface IPortfolioProps {
  data: IPortfolio;
}

const Portfolio: FC<IPortfolioProps> = ({ data }) => {
  const [getModal, setGetModal] = useState(false);
  const [modalData, setModalData] = useState<IPortfolioData>();
  const [tabSelected, setTabSelected] = useState<ITag>('All' || 'Todos');
  const content = data.data;
  const tabs = data.tabs;

  const handleModal = (modalData: IPortfolioData) => {
    setGetModal(true);
    setModalData(modalData);
  };

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          <TabList className="portfolio-tab-list" data-aos="fade-up">
            {tabs?.map((tab, index) => (
              <Tab onClick={() => setTabSelected(tab)} key={index}>
                {tab.toLocaleUpperCase()}
              </Tab>
            ))}
          </TabList>

          <div className="container">
            <TabPanel>
              <div className="tab-container">
                {content?.map((item) => {
                  const { id, type, image, delayAnimation } = item;
                  return (
                    <div
                      key={id}
                      data-aos="fade-right"
                      data-aos-delay={delayAnimation}
                    >
                      <div
                        className="tab-content"
                        onClick={() => handleModal(item)}
                      >
                        <Image src={image} alt="portfolio project demo" />
                        <h3>
                          <span className="conent-title">{type}</span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>
            </TabPanel>

            <TabPanel forceRender={!!tabSelected}>
              <div className="tab-container">
                {content
                  ?.filter((item) => item.tag.includes(tabSelected))
                  .map((item) => {
                    const { id, type, image, delayAnimation } = item;
                    return (
                      <div
                        key={id}
                        data-aos="fade-right"
                        data-aos-delay={delayAnimation}
                      >
                        <div
                          className="tab-content"
                          onClick={() => handleModal(item)}
                        >
                          <Image src={image} alt="portfolio project demo" />
                          <h3>
                            <span className="conent-title">{type}</span>
                          </h3>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </TabPanel>
          </div>
        </Tabs>
      </div>
      {getModal && (
        <ModalMain modalData={modalData} setGetModal={setGetModal} />
      )}{' '}
    </>
  );
};

export default Portfolio;
