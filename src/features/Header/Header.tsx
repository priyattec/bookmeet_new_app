import React from "react";
import { Image } from "react-bootstrap";
// import { Menubar } from 'primereact/menubar';
import '../Header/Header.css'
import HeaderImg from "../../assets/HeaderLogo.png";
import DefaultUsrImg from "../../assets/DefaultUsrImg.png";

const HeaderItem = (props: any) => {
  const user = props.user;
  return (
    <nav className='appHeader'>
      <ul className="listContainer">
        <li style={{width: '15%'}} className='header-Li'>
          <Image src={HeaderImg} alt="ttec Bookmeet" style={{width:'100%'}} />
        </li>
        <li className='header-Li'>
          <Image src={user ? user.displayPic : { DefaultUsrImg }} alt="user" />
        </li>
      </ul>
    </nav>
  );
};

export default HeaderItem;
