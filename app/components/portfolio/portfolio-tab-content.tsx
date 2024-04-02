import React, { FC } from 'react';
import { TabPanel } from 'react-tabs';
import { IPortfolioData, ITag } from '@/data/portfolio';
import Card from './card';

interface IPortfolioTabContentProps {
  content: IPortfolioData[];
  tabSelected: ITag;
  onClick: (data: IPortfolioData) => void;
}

const PortfolioTabContent: FC<IPortfolioTabContentProps> = ({
  content,
  tabSelected,
  onClick,
}) => {
  return (
    <div className="container">
      <TabPanel value={tabSelected} forceRender={!!tabSelected}>
        <div className="tab-container">
          {content
            ?.filter((item) => item.tag.includes(tabSelected))
            .map((item) => {
              const { id, delayAnimation } = item;
              return (
                <Card
                  key={id}
                  data-aos="fade-right"
                  data-aos-delay={delayAnimation}
                  data={item}
                  onClick={() => onClick(item)}
                />
              );
            })}
        </div>
      </TabPanel>
    </div>
  );
};

export default PortfolioTabContent;
