import {ReactElement} from "react";
import styles from "./ProgressBar.module.scss"

type ProgressBarProps = {
    level: 1 | 2 | 3 | 4 | 5; // Уровни от 1 до 5 (20%, 40%, 60%, 80%, 100%)
};
const LEVELS = [20, 40, 60, 80, 100];

function ProgressBar({level}: ProgressBarProps): ReactElement {
    const fillWidth = LEVELS[level - 1] + "%";
    return (<div className={styles.progressBar}>
            <div className={styles.fill} style={{width: fillWidth}}>

            </div>
        </div>)
}

export default ProgressBar
