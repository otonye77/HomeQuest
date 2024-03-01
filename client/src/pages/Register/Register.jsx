import Button from "../../components/Button/Button";
import InputForm from "../../components/InputForm/InputForm";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const GoToLogin = () => {
        navigate('/login')
    }
  return (
    <div className="register-container">
      <div className="register">
        <h2 className="register-text">Register</h2>
      </div>
      <div className="register-form-container">
        <InputForm type="text" placeholder="Enter your username" />
        <InputForm type="email" placeholder="Enter your email" />
        <InputForm type="password" placeholder="Enter your password" />
      </div>
      <div className="register-button-container">
        <Button onClick={() => console.log("click")} name="Register" />
      </div>
      <div onClick={GoToLogin } className="have-an-account-container">
        <p className="have-an-account-text">Already have an account ? Login</p>
      </div>
    </div>
  );
};

export default Register;
