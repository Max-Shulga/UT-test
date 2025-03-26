import {useState} from "react";
import Button from "@/components/Button/Button";
import styles from "./CookiesNotification.module.scss";

function CookiesNotification(){
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false);
    };
    if (!visible) return null;

    return(
        <div className={styles.cookieBanner}>
            <p>We use cookies to make your experience better! If you continue to use this site we will assume you are happy with it.</p>
            <Button variant='secondary' onClick={handleClose}>Sign in</Button>
        </div>
    )
}
export default CookiesNotification;
