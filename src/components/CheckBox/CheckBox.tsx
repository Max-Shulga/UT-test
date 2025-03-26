import {ReactElement, useState} from "react";
import styles from './CheckBox.module.scss'

function CustomCheckbox(): ReactElement {
    const [checked, setChecked] = useState(false);

    return (<div
            className={`${styles.checkbox} ${checked ? `${styles.checked}` : ""}`}
            onClick={() => setChecked(!checked)}
        >
            <div className={styles.innerBox}></div>
        </div>);
}

export default CustomCheckbox;
