import {ReactElement} from "react";
import {Link} from 'react-router-dom';
import styles from './Home.module.scss'

function HomeFooter(): ReactElement {
    return (

        <footer className={styles.footerContainer}>
            <ul>
                <li><Link to="">Terms of Use</Link></li>
                <li><Link to="">Billing Policy</Link></li>
                <li><Link to="">Cookie Policy</Link></li>
                <li><Link to="">Refund Policy</Link></li>
                <li><Link to="">Privacy Policy</Link></li>
                <li><Link to="">Risks Notice</Link></li>
                <li><Link to="">Disclosures and Disclaimers</Link></li>
                <li><Link to="">Contact Us</Link></li>
            </ul>
        </footer>

    )
}

export default HomeFooter;
