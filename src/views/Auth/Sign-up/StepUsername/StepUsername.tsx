import {ReactElement} from "react";
import styles from './StepUsername.module.scss'
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import {useForm} from "react-hook-form";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import {setUsername} from "@/store/slices/authSlice";
import {useAppDispatch} from "@/store/hooks";

type FormValues = {
    username: string;
};
type StepUsernameType = {
    onNext: (data: FormValues) => void
}

function StepUsername({onNext}: StepUsernameType): ReactElement {
    const {
        register, handleSubmit, formState: {errors},
    } = useForm<FormValues>();

    const dispatch = useAppDispatch();

    const handleFormSubmit = (data: FormValues) => {
        dispatch(setUsername(data.username));
        onNext(data);
    }
    return (<form onSubmit={handleSubmit(handleFormSubmit)} className={styles.form}>
        <ProgressBar level={2}/>
        <legend>What name should users call you?</legend>
        <label>
            <Input

                {...register("username", {required: "Username is required"})}
                placeholder="Type your username"
            />
        <p>You don’t have to use your real name – feel free to use a nickname. You can change it anytime.</p>
        </label>
        <Button>CONTINUE →</Button>

    </form>)
}

export default StepUsername;
