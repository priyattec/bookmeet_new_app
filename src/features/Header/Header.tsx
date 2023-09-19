import React from "react";
import Image from "react-bootstrap/Image";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router";
// import { Menubar } from 'primereact/menubar';
import styles from "./Header.module.css";
import HeaderImg from "../../assets/HeaderLogo.png";
import DefaultUsrImg from "../../assets/DefaultUsrImg.png";

const HeaderItem = (props: any) => {
  const user = props.user;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 const navigate = useNavigate()
  return (
    <nav className={styles.appHeader}>
      <ul className={styles.listContainer}>
        <li style={{ width: "15%" }} className={styles.headerLi}>
          <Image
            src={HeaderImg}
            alt="ttec Bookmeet"
            className={styles.headerImage}
          />
        </li>
        <li className={styles.headerLi}>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {<div className={styles.circleImageContainer}>
                <Image
                  src={user ? user.displayPic : DefaultUsrImg}
                  alt="user"
                  className={styles.circleImage}
                  roundedCircle
                />
          </div>}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={() => navigate('/BookingHistory')}>Booking History</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
          
        </li>
      </ul>
    </nav>
  );
};

export default HeaderItem;
