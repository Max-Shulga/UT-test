import {FC, useEffect, useState} from "react";
import styles from "./Dropdown.module.scss";
import useClickOutside from "@/hooks/useClickOutside";

interface DropdownProps {
    options: string[];
    placeholder: string;
    onSelect: (selectedOption: string) => void;
    selected?: string | null;

}

const Dropdown: FC<DropdownProps> = ({options, placeholder, onSelect, selected}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [localSelected, setLocalSelected] = useState<string | null>(selected || null);

    const ref = useClickOutside(() => {
        setIsOpen(false)
    });

    const handleSelect = (option: string) => {
        onSelect(option);
        setLocalSelected(option);
        setIsOpen(false);
    };
    useEffect(() => {
        if (selected !== undefined && selected !== localSelected) {
            setLocalSelected(selected);
        }
    }, [selected]);

    return (<div className={styles.dropdown} ref={ref}>
            <button className={styles.dropdown__button} onClick={() => setIsOpen(!isOpen)}>
                {localSelected || placeholder}
                <span className={`${styles.dropdown__icon} ${isOpen ? styles.open : ""}`}></span>
            </button>

            {isOpen && (<ul className={styles.dropdown__list}>
                    {options.map((option, index) => (<li
                            key={index}
                            className={styles.dropdown__item}
                            onClick={() => {
                                handleSelect(option);
                            }}
                        >
                            {option}
                        </li>))}
                </ul>)}
        </div>);
};

export default Dropdown;
