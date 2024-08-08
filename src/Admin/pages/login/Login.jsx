import "./login.css"
import '../../../Pages/CSS/LoginSignup.css'
import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from "../../Api/AdminApi";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigate();

  //dang nhap 
  const handleSingin = async (e) => {
    e.preventDefault();
    try {
       await loginAdmin(username, password);
       navigation('/admin');
    } catch (error) {
       console.log('Can not login', error);
    }
};

  return (
    <section className={`container forms`}>
      <div className="form login">
        <div className="form-content">
          <header>Login</header>
          <form onSubmit={handleSingin}>
            <div className="field input-field">
              <input type="text" placeholder="UserName" className="input" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="field input-field">
              <input type="password" placeholder="Password" className="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <i className='bx bx-hide eye-icon'></i>
            </div>
            <div className="form-link">
              <a href="#" className="forgot-pass">Forgot password?</a>
            </div>
            <div className="field button-field">
              <button type="button" onClick={ handleSingin}>Login</button>
            </div>
          </form>
        </div>
        <div className="line"></div>
        <div className="media-options">
          <a href="#" className="field facebook">
            <i className='bx bxl-facebook facebook-icon'></i>
            <span>Login with Facebook</span>
          </a>
        </div>
        <div className="media-options">
          <a href="#" className="field google">
            <img src="#" alt="Google logo" className="google-img" />
            <span>Login with Google</span>
          </a>
        </div>
      </div>
      {/* Signup Form */}
     
    </section>
  );
};

export default Login