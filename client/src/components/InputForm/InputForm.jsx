import "./InputForm.css";

// eslint-disable-next-line react/prop-types
const InputForm = ({ placeholder, type, onChange, name }) => {
    return (
        <div className="input-form-container">
            <input type={type} name={name} placeholder={placeholder} onChange={onChange} className="input-field" />
        </div>
    );
}

export default InputForm;
