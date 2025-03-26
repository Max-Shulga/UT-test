import {ReactElement} from "react";
import styles from "./AvatarCard.module.scss";
type AvatarCardProps = {
    src: string;
    className?: string;
};

function AvatarCard({src,className}: AvatarCardProps): ReactElement {
    const combineClassName = `${className} ${styles.icon} `
    return (
        <img src={src} alt="avatar" className={combineClassName}/>
    )
}

export default AvatarCard;
