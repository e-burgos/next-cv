import Image from 'next/image';
import React, { useEffect } from 'react';
import lightImage from '@/public/assets/img/sun.png';
import { handleSwitchValue } from '@/utils/funtions';
import { useTheme } from '@/store/useTheme';

const SwitchDark = () => {
  const { themeColor, setThemeColor } = useTheme();

  useEffect(() => {
    if (themeColor === 'dark') handleSwitchValue(true);
    if (themeColor === 'light') handleSwitchValue(false);
  }, [themeColor]);

  const handleLabelClick = () => {
    if (themeColor === 'dark') {
      setThemeColor('light');
    } else {
      setThemeColor('dark');
    }
  };

  return (
    <>
      <label
        className={`theme-switcher-label d-flex  ${
          themeColor !== 'dark' ? 'active' : ''
        }`}
      >
        <input
          type="checkbox"
          onClick={handleLabelClick}
          className="theme-switcher"
        />
        <div className="switch-handle">
          <span className="light-text">
            <Image
              src={lightImage}
              alt="swicher"
              className="filter_1"
              priority
            />
          </span>
          <span className="dark-text">
            <i className="fa fa-moon-o" aria-hidden="true"></i>
          </span>
        </div>
      </label>
    </>
  );
};

export default SwitchDark;
