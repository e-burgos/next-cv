import React, { FC, useCallback, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ModalMain from './modal/modal-main';
import { IPortfolio, IPortfolioData, ITag } from '@/data/portfolio';
import Card from './card';
import { useLanguage } from '@/app/store/useLanguage';
import PortfolioTabContent from './portfolio-tab-content';
import PortfolioTabList from './portfolio-tab-list';

interface IPortfolioProps {
  data: IPortfolio;
}

const Portfolio: FC<IPortfolioProps> = ({ data }) => {
  const { currentLang } = useLanguage();
  const content = data.data;
  const tabs = data.tabs;
  const filterTabs = data.filterTabs;
  const allTabLang: ITag = currentLang === 'en' ? 'All' : 'Todos';
  const categoryTabLang: ITag =
    currentLang === 'en' ? 'Categories' : 'Categorías';
  const featuredTabLang: ITag =
    currentLang === 'en' ? 'Featured' : 'Destacados';

  const tecnologyTabs: ITag[] = [
    featuredTabLang,
    'React JS',
    'Next JS',
    'Node JS',
    'Vite JS',
    'Gatsby JS',
    'React Native',
    'Storybook',
    'MUI',
    'GraphQL',
    'Microfrontends',
    'Wordpress',
    'Web3/Blockchain',
    allTabLang,
  ];

  const categoryTabs: ITag[] = [
    featuredTabLang,
    'E-commerce',
    'Landing Page',
    'DApp',
    'WebApp',
    'Mobile App',
    'UI/UX',
    'Web3/Blockchain',
    allTabLang,
  ];

  const [getModal, setGetModal] = useState(false);
  const [modalData, setModalData] = useState<IPortfolioData>();
  const [tabSelected, setTabSelected] = useState<ITag>(featuredTabLang);
  const [filter, setFilter] = useState<ITag[]>(categoryTabs || [allTabLang]);

  const handleFilterTabs = useCallback(
    (tab: ITag) => {
      switch (tab) {
        case 'All':
        case 'Todos':
          setFilter(tabs || [featuredTabLang]);
          setTabSelected(allTabLang);
          return;
        case 'Categories':
        case 'Categorías':
          setFilter(categoryTabs);
          setTabSelected(featuredTabLang);
          return;
        case 'Technologies':
        case 'Tecnologías':
          setFilter(tecnologyTabs);
          setTabSelected(featuredTabLang);
          return;
        default:
          return;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allTabLang, tabs, setTabSelected]
  );

  const handleModal = (modalData: IPortfolioData) => {
    setGetModal(true);
    setModalData(modalData);
  };

  return (
    <>
      <div className="portfolio-main">
        <Tabs>
          {filterTabs && (
            <PortfolioTabList
              tabSelected={categoryTabLang}
              tabs={filterTabs}
              onClick={handleFilterTabs}
            />
          )}
          <PortfolioTabList
            tabSelected={tabSelected}
            tabs={filter}
            onClick={setTabSelected}
          />
          <PortfolioTabContent
            content={content}
            tabSelected={tabSelected}
            onClick={handleModal}
          />
        </Tabs>
      </div>
      {getModal && (
        <ModalMain modalData={modalData} setGetModal={setGetModal} />
      )}{' '}
    </>
  );
};

export default Portfolio;
