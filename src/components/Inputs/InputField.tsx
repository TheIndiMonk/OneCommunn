import style from './InputField.module.css'
import { InputFieldProps } from "../../lib/types/Inputs/InputFieldProps";



const InputField: React.FC<InputFieldProps> = ({ label, id, name, type, value, onChange }) => (
    <div className={style.formGroup}>
        <label htmlFor={id}>{label}</label>
        <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
        />
    </div>
);
export default InputField;