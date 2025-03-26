import {ReactElement, useState} from "react";
import Logotype from "@/components/Logotype";
import StepUsername from "@/views/Auth/Sign-up/StepUsername/StepUsername";
import styles from './SignUp.module.scss'
import StepAge from "@/views/Auth/Sign-up/StepAge/StepAge";
import StepMail from "@/views/Auth/Sign-up/StepMail/StepMail";
import StepPassword from "@/views/Auth/Sign-up/StepPassword/StepPassword";
function SignUp():ReactElement{
    const [step, setStep] = useState(1)
    const nextStep = () => {
        setStep(prevState => prevState + 1);
    };

    return (
        <section className={styles.container}>
            <Logotype/>
            {step === 1 && <StepUsername onNext={nextStep}/>}
            {step === 2 && <StepAge onNext={nextStep}/>}
            {step === 3 && <StepMail onNext={nextStep}/>}
            {step === 4 && <StepPassword />}

        </section>
    )
}
export default SignUp;
