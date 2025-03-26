import {ReactElement} from "react";
import WelcomeIcon from '@/assets/icons/clapper.svg?react'
import CheckBox from "@/components/CheckBox/CheckBox";
import styles from './Welcome.module.scss'
import Button from "@/components/Button/Button";
import Logotype from "@/components/Logotype";

function Welcome(): ReactElement {
    return (<section className={styles.container}>
        <Logotype/>
        <WelcomeIcon width={200} height={200}/>
        <h2>Thanks for your answers!</h2>
        <p className={styles.textOne}>Please check the box below to accept our rules. You’re all set!</p>
        <div className={styles.checkBox}>
            <CheckBox/>
            <p className={styles.textTwo}>I have read, understand and agree to Terms of Use, Privacy Policy, Cookie
                Policy, Billing & Refund Policy, Disclosures & Disclaimers</p>
        </div>
        <Button>Join Now →</Button>
    </section>)
}

export default Welcome;
