import {ReactElement} from "react";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import {useForm} from "react-hook-form";
import styles from './StepPassword.module.scss'
import {useAppDispatch} from "@/store/hooks";
import {setPassword} from "@/store/slices/authSlice";
import {useNavigate} from "react-router-dom";

type FormValues = {
    password: string; confirmPassword: string;
};


function StepPassword(): ReactElement {
    const {
        register, handleSubmit, getValues, formState: {errors},
    } = useForm<FormValues>();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit = (data: FormValues) => {
        dispatch(setPassword(data.password))
        navigate('/welcome');
    };
    return (<section className={styles.container}>
        <ProgressBar level={5}/>
        <h2>Create your password</h2>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
            <label>
                <Input
                    {...register("password", {
                        required: "Password is required", minLength: {
                            value: 8, message: "Password must be at least 8 characters long",
                        },
                    })}
                    placeholder="Your password"
                    type="password"
                />
            </label>
            <label>
                <Input
                    {...register("confirmPassword", {
                        required: "Confirm password is required",
                        validate: (value) => value === getValues("password") || "Passwords do not match",
                    })}
                    placeholder="Confirm password"
                    type="password"
                />
            </label>
            <p>Passwords must be at least 8 characters long. You can recover passwords at any time using the email
                address you provided.</p>
            <Button>
                CONTINUE →
            </Button>
        </form>
    </section>)
}

export default StepPassword;
