import "./InputForm.css";

// eslint-disable-next-line react/prop-types
const InputForm = ({ placeholder, type }) => {
    return (
        <div className="input-form-container">
            <input type={type} placeholder={placeholder} className="input-field" />
        </div>
    );
}

export default InputForm;
