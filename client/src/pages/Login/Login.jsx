import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoginUser } from '../../services/authapi';
import Button from "../../components/Button/Button";
import InputForm from "../../components/InputForm/InputForm";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ email: '', password: '' });

    const handleSubmit = () => {
      try {
          dispatch(LoginUser(userData));
          navigate('/home');
      } catch (error) {
          console.error('Login failed:', error);
      }
  };
  


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    return (
        <div className="login-container">
            <div className="login">
                <h2 className="login-text">Login</h2>
            </div>
            <div className="login-form-container">
                <InputForm type="email" name="email" placeholder="Enter your email" onChange={handleInputChange} />
                <InputForm type="password" name="password" placeholder="Enter your password" onChange={handleInputChange} />
            </div>
            <div className="login-button-container">
                <Button onClick={handleSubmit} name="Login" />
            </div>
        </div>
    );
};

export default Login;
