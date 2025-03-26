import {ReactElement} from "react";
import AvatarCard from "@/components/AvatarCard/AvatarCard";
import styles from "./Home.module.scss";
function AvatarCardsList():ReactElement{

    return (
        <ul className={styles.avatarCardsList}>
            <li><AvatarCard src={'src/assets/images/girl-1.png'} className={styles.icon}/></li>
            <li><AvatarCard src={'src/assets/images/girl-2.png'}/></li>
            <li><AvatarCard src={'src/assets/images/girl-3.png'}/></li>
            <li><AvatarCard src={'src/assets/images/girl-4.png'}/></li>
            <li><AvatarCard src={'src/assets/images/girl-5.png'} className={styles.icon}/></li>
        </ul>
    )
}
export default AvatarCardsList;
