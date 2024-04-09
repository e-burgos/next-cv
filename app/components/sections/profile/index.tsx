import React, { useState } from 'react';
import Image from 'next/image';
import { IProfileContent } from '@/data/profile';
import styles from './styles/profile.module.css';
import { useTheme } from '@/app/store/useTheme';

interface Props {
  profileContent: IProfileContent;
}

const Profile = ({ profileContent }: Props) => {
  const { themeColor } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div className="col-lg-5 position-fixed d-none d-lg-flex align-items-center justify-content-center">
          <Image
            src={profileContent.profileImageStatic}
            className=""
            style={{
              height: '28vw',
              width: '28vw',
              borderRadius: ' 50%',
            }}
            alt="profile"
          />
        </div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <Image
              src={
                themeColor === 'dark'
                  ? profileContent.profileMobileImageDark
                  : profileContent.profileMobileImageLight
              }
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="profile"
              style={{ width: '100%', height: '100%' }}
            />
            <h1 className="text-uppercase poppins-font">
              {profileContent.profileTitleName}.
              <span>{profileContent.profileDesignation}</span>
            </h1>
            <p className="open-sans-font">
              {profileContent.profileDescriptions}
            </p>
            <div className={styles.profileButtons}>
              {profileContent.profileBtn.map((btn) => (
                <a
                  key={btn.iconName}
                  target="_blank"
                  href={btn.link}
                  className={`${styles.button} ${btn.iconName}`}
                ></a>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* End home-details-container */}
    </>
  );
};

export default Profile;
