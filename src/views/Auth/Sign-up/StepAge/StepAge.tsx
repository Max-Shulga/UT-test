import {ReactElement, useEffect, useState} from "react";
import styles from './StepAge.module.scss'
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Dropdown from "@/components/Dropdown/Dropdown";
import Button from "@/components/Button/Button";
import ageRange from "@/utils/ageRange";
import monthNames from "@/utils/monthNames";
import years from "@/utils/years";
import getDaysInMonth from "@/utils/getDaysInMonths";
import daysArray from "@/utils/daysArray";
import {useAppDispatch} from "@/store/hooks";
import {setAge, setAgePreference} from "@/store/slices/authSlice";
import calculateAge from "@/utils/calculateAge";

type StepAgeType = {
    onNext: () => void
}

function StepAge({onNext}: StepAgeType): ReactElement {
    const dispatch = useAppDispatch();
    const yearsReverse = years.slice().reverse()
    const [agePreferenceLocal, setAgePreferenceLocal] = useState<[number, number] | null>(null)
    const [validDaysArray, setValidDaysArray] = useState<number[]>(daysArray);

    const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
    const [selectedDay, setSelectedDay] = useState<string | null>(null);
    const [selectedYear, setSelectedYear] = useState<string | null>(null);
    const handleAgePreferenceSelect = (selectedValue: string, index: number) => {
        const updatedPreference = [...(agePreferenceLocal || [0, 0])];
        updatedPreference[index] = +selectedValue;
        setAgePreferenceLocal(updatedPreference as [number, number]);
    };
    const handleOnClick = () => {
        if (selectedMonth && selectedDay && selectedYear && agePreferenceLocal) {
            console.log(1)
            const age = calculateAge(selectedMonth, selectedDay, selectedYear)

            dispatch(setAge(age));
            dispatch(setAgePreference(agePreferenceLocal))
            onNext()
        }
    }

    useEffect(() => {
        if (selectedMonth) {
            const daysInMonth = selectedYear ? getDaysInMonth(selectedMonth, +selectedYear!) : getDaysInMonth(selectedMonth);


            setValidDaysArray(daysInMonth);

            if (+(selectedDay || "0") > daysInMonth.length) {
                console.log(1)
                setSelectedDay(null);
            }
        }
    }, [selectedMonth, selectedYear])

    const handleDateSelect = (value: string, type: "month" | "day" | "year") => {
        if (type === "month") {
            setSelectedMonth(value);
        } else if (type === "day") {
            setSelectedDay(value);
        } else if (type === "year") {
            setSelectedYear(value);
        }
    };

    return (<section className={styles.container}>
        <ProgressBar level={3}/>
        <h2>Select your age preference for women</h2>
        <div className={styles.preferenceAgeContainer}>
            <Dropdown
                placeholder={'From'}
                options={ageRange.map(String)}
                onSelect={(value) => handleAgePreferenceSelect(value, 0)}/>
            <Dropdown
                placeholder={'To'}
                options={ageRange.map(String)}
                onSelect={(value) => handleAgePreferenceSelect(value, 1)}
            />
        </div>
        <h3>What is your age?</h3>
        <div className={styles.userAgeContainer}>
            <Dropdown
                placeholder={'Month'}
                options={monthNames}
                onSelect={(value) => handleDateSelect(value, "month")}
            />
            <Dropdown
                placeholder={'Day'}
                options={validDaysArray.map(String)}
                onSelect={(value) => handleDateSelect(value, "day")}
                selected={selectedDay}

            />
            <Dropdown
                placeholder={'Year'}
                options={yearsReverse.map(String)}
                onSelect={(value) => handleDateSelect(value, "year")}
            />
        </div>
        <p>By proceeding, you confirm that you are fully legally capable of using this website and are at least 18
            years old.</p>
        <Button onClick={handleOnClick}>CONTINUE →</Button>
    </section>)
}

export default StepAge;
