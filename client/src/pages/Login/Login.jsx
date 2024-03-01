import Button from "../../components/Button/Button";
import InputForm from "../../components/InputForm/InputForm";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const GoToHome = () => {
    navigate('/home')
  }
  return (
    <div className="login-container">
      <div className="login">
        <h2 className="login-text">Login</h2>
      </div>
      <div className="login-form-container">
        <InputForm type="email" placeholder="Enter your email" />
        <InputForm type="password" placeholder="Enter your password" />
      </div>
      <div className="login-button-container">
        <Button onClick={GoToHome} name="Login" />
      </div>
    </div>
  );
};

export default Login;
