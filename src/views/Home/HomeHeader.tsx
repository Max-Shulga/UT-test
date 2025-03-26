import {ReactElement} from "react";
import Button from "@/components/Button/Button";
import styles from './Home.module.scss'
import {Link} from "react-router-dom";
import Logotype from "@/components/Logotype";

function HomeHeader(): ReactElement {
    return (<header className={styles.headerContainer}>
        <Logotype/>
        <div className={styles.signInLink}>
            <Link to={''} className={styles.textLink}>
                Already have an account?
            </Link>
            <Link to={''}>

                <Button variant="secondary">Sign in</Button>
            </Link>

        </div>
    </header>)
}

export default HomeHeader;
