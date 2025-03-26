import {ReactElement, useState} from "react";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Card from "@/components/Card/Card";
import HotIcon from '@/assets/icons/hot.svg?react'
import TrendyIcon from '@/assets/icons/trendy.svg?react'
import Input from "@/components/Input/Input";
import {useForm} from "react-hook-form";
import Button from "@/components/Button/Button";
import styles from './StepMail.module.scss'

import {setContentType, setMail} from "@/store/slices/authSlice";
import {useAppDispatch} from "@/store/hooks";
import {contentType} from "@/types/contentType";

type FormValues = {
    email: string;
};
type StepMailType = {
    onNext: (data: FormValues) => void
}

function StepMail({onNext}: StepMailType): ReactElement {
    const {
        register, handleSubmit,
    } = useForm<FormValues>();
    const dispatch = useAppDispatch()

    const [selectedContent, setSelectedContent] = useState<contentType>(null);

    const handleCardClick = (contentType: contentType) => {
        setSelectedContent(contentType);
        dispatch(setContentType(contentType!))
    };
    const handleFormSubmit = (data: FormValues) => {
        dispatch(setMail(data.email));
        onNext(data);
    }
    return (<section className={styles.container}>
        <ProgressBar level={4}/>
        <h2>What kind of content do you enjoy? 👀</h2>
        <div className={styles.cardContainer}>
            <Card
                title={'Hot'}
                Icon={HotIcon}
                onClick={() => handleCardClick('hot')}
                isSelected={selectedContent === 'hot'}

            />
            <Card
                title={'Trendy'}
                Icon={TrendyIcon}
                onClick={() => handleCardClick('trendy')}
                isSelected={selectedContent === 'trendy'}

            />
        </div>
        <form onSubmit={handleSubmit(handleFormSubmit)} className={styles.formContainer}>
            <legend>What is your email address?</legend>
            <label>
                <Input

                    {...register("email", {required: "Email is required"})}
                    placeholder="Type your username"
                />
            </label>
            <p>Email is required for registration.</p>
            <Button>CONTINUE →</Button>
        </form>
    </section>)
}

export default StepMail
