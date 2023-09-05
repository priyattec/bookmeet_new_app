import React from "react";
import { Image } from "react-bootstrap";
// import { Menubar } from 'primereact/menubar';
import styles from './Header.module.css'
import HeaderImg from "../../assets/HeaderLogo.png";
import DefaultUsrImg from "../../assets/DefaultUsrImg.png";

const HeaderItem = (props: any) => {
  const user = props.user;
  return (
    <nav className={styles.appHeader}>
      <ul className={styles.listContainer}>
        <li style={{ width: "15%" }} className={styles.headerLi}>
          <Image src={HeaderImg} alt="ttec Bookmeet" className={styles.headerImage} />
        </li>
        <li className={styles.headerLi}>
          <div className={styles.circleImageContainer}>
            <Image src={user ? user.displayPic : DefaultUsrImg} alt="user" className={styles.circleImage} roundedCircle />
          </div>
        </li>
      </ul>
    </nav>

  );
};

export default HeaderItem;
