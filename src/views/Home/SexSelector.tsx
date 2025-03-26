import {ReactElement, useState} from "react";
import Card from "@/components/Card/Card";
import Male from "@/assets/icons/male.svg?react"
import Female from "@/assets/icons/female.svg?react"
import styles from "./Home.module.scss"
import {setSex} from "@/store/slices/authSlice";
import {sexType} from "@/types/sex";
import {useAppDispatch, useAppSelector} from "@/store/hooks";

function SexSelector(): ReactElement {
    const [selectedSex, setSelectedSex] = useState<sexType>(null);
    const dispatch = useAppDispatch()
    const handleCardClick = (sex: sexType) => {
        setSelectedSex(sex);
        dispatch(setSex(sex))
    };
    return (<div className={styles.sexSelector}>
        <h3>Select your sex</h3>
        <div className={styles.cards}>
            <Card
                onClick={() => handleCardClick('male')}
                Icon={Male}
                title="Male"
                isSelected={selectedSex === 'male'}
            />
            <Card
                onClick={() => handleCardClick('female')}
                Icon={Female}
                title="Female"
                isSelected={selectedSex === 'female'}
            />
        </div>
    </div>)

}

export default SexSelector
