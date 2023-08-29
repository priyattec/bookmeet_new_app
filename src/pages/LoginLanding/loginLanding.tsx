import HeaderItem from "../../features/Header/Header";
import LoginPgImg from "../../assets/LoginPgImg.png";
import Button from "react-bootstrap/Button";

import '../LoginLanding/LoginLanding.css'

const LoginLanding = () => {
  return (
    <div>
      <HeaderItem />
      <div className="container">
        <div className="textPart">
          <h1>Welcome to the Ttec BookMeet App!</h1>
          <div className="loginBtns">
            <Button style={{marginRight:'1rem'}}>SSO Login</Button>
            <Button>Non SSO Login</Button>
          </div>
        </div>
        <div className="ImgPart">
          <div className="displayImg">
            <img
              src={LoginPgImg}
              alt=" 2 people sitting"
              style={{backgroundColor:"#ff9933", width: '95%', padding:'1rem', marginTop: '5rem'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginLanding;
