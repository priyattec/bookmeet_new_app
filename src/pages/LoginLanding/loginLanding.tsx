import { useNavigate } from "react-router-dom";
import HeaderItem from "../../features/Header/Header";
import LoginPgImg from "../../assets/LoginPgImg.png";
import Button from "react-bootstrap/Button";
import styles from './LoginLanding.module.css'; // Import your CSS Module

const LoginLanding = () => {
  const navigate = useNavigate();
  return (
    <div>
      <HeaderItem />
      <div className={styles.container}>
        <div className={styles.textPart}>
          <h1>Welcome to the Ttec BookMeet App!</h1>
          <div className={styles.loginBtns}>
            <Button className={styles.ssoButton} onClick={() => navigate('/MainPage')}>SSO Login</Button>
            <Button className={styles.nonSsoButton} onClick={() => navigate('/nonssologin')}>Non SSO Login</Button>
          </div>
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

export default LoginLanding;
