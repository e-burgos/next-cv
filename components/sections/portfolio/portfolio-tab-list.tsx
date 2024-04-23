import React, { FC, useEffect, useState } from 'react';
import { Tab, TabList } from 'react-tabs';
import { ITag } from '@/data/portfolio';
import { useLanguage } from '@/store/useLanguage';

interface IPortfolioTabListProps {
  tabs: ITag[];
  tabSelected?: ITag;
  onClick: (data: ITag) => void;
}

const PortfolioTabList: FC<IPortfolioTabListProps> = ({
  tabs,
  tabSelected,
  onClick,
}) => {
  const { currentLang } = useLanguage();
  const allTabLang = currentLang === 'en' ? 'All' : 'Todos';
  const [selectedTab, setSelectedTab] = useState<ITag>(
    tabSelected || allTabLang
  );

  const handleSelectedTab = (tab: ITag) => {
    if (tabSelected) setSelectedTab(tabSelected);
    setSelectedTab(tab);
  };

  useEffect(() => {
    if (tabSelected) setSelectedTab(tabSelected);
  }, [tabSelected, currentLang]);

  return (
    <div className="portfolio-tab-list" data-aos="fade-up">
      <TabList className="portfolio-tab-list" data-aos="fade-up">
        {tabs?.map((tab) => (
          <Tab
            selected={selectedTab === tab}
            onClick={() => {
              onClick(tab);
              handleSelectedTab(tab);
            }}
            key={tab}
          >
            {tab.toLocaleUpperCase()}
          </Tab>
        ))}
      </TabList>
    </div>
  );
};

export default PortfolioTabList;
