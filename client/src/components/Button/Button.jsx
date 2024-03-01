import "./Button.css";

// eslint-disable-next-line react/prop-types
const Button = ({ name, onClick }) => {
    return (
        <button className="button-component" onClick={onClick}>
            {name}
        </button>
    );
};


export default Button;
