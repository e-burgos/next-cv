import React, { useState } from "react";
import Image from "next/image";
import { IProfileContent } from "@/data/profile";
import styles from "./styles/profile.module.css";

interface Props {
  profileContent: IProfileContent;
}

const Profile = ({ profileContent }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{ backgroundImage: `url(${profileContent.profileImage})` }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <Image
              src={profileContent.profileMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="profile"
              style={{ width: "100%", height: "100%" }}
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
