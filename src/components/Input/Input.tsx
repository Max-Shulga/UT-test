import {FC, InputHTMLAttributes} from "react";
import styles from "./Input.module.scss";
type InputFieldProps ={
    placeholder: string;
}
const Input: FC<InputFieldProps & InputHTMLAttributes<HTMLInputElement>> = ({ placeholder, ...props }) => {
    return (
        <input
            {...props}
            className={styles.input}
            placeholder={placeholder}
        />
    );
};

export default Input;
