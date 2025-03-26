import {FC, ReactElement, SVGProps} from "react";
import styles from "./Card.module.scss";

type CardProps = {
    title: string, onClick?: () => void, Icon: FC<SVGProps<SVGSVGElement>>
    isSelected?: boolean;
}

function Card({title, onClick, Icon, isSelected}: CardProps): ReactElement {

    return (
    // @ts-ignore
        <div onClick={onClick} className={styles.container} style={{backgroundColor: isSelected && "#ffffff"}}>
            {Icon && <Icon className={styles.icon} />}
            <p>{title}</p>
        </div>
    )
}

export default Card;
