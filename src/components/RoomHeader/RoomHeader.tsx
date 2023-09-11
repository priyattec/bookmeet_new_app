// RoomHeader.tsx

import React from "react";
import styles from "./RoomHeader.module.css";

interface RoomHeaderProps {
  backgroundImage: string;
  bannerText: string;
}

const RoomHeader: React.FC<RoomHeaderProps> = ({ backgroundImage, bannerText }) => {
  return (
    <div className={styles.banner} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.overlay}></div> 
      <div className={styles.bannerText}>{bannerText}</div>
    </div>
  );
};

export default RoomHeader;
