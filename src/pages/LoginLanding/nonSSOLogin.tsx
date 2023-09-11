import { useNavigate } from "react-router-dom";
import HeaderItem from "../../features/Header/Header";
import LoginPgImg from "../../assets/nonssologinImg.png";
import Button from "react-bootstrap/Button";
import styles from './NonSSOLogin.module.css'; // Import your CSS Module

const NonSSOLogin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderItem />
      <div className={styles.container}>
        <div className={styles.textPart}>
        form area
        </div>
        <div className={styles.ImgPart}>
          <div className={styles.displayImg}>
            <img
              src={LoginPgImg}
              alt=" 2 people sitting"
              className={styles.loginImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonSSOLogin;
