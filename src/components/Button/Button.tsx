import {ReactElement, ReactNode} from "react";
import styles from './Button.module.scss'
type ButtonProps = {
    variant?: "primary" | "secondary";
    children: ReactNode;
    onClick?: () => void;
    className?: string;
};
function Button({ variant = 'primary', children, onClick,className }: ButtonProps):ReactElement{
    const style = variant === "primary" ? styles.primary : styles.secondary;
    const combineClassName = `${className} ${style}`
return (
    <button
        className={combineClassName}
        onClick={onClick}
    >
        {children}
    </button>
)
}

export default Button;
