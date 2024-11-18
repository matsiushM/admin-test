import React from "react";

import styles from './InputDate.module.sass';

export interface InputDateProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const DateInput = ({label, value, onChange, placeholder}: InputDateProps) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let inputValue = e.target.value.replace(/[^\d/]/g, '');

        if (inputValue.length > 10) inputValue = inputValue.slice(0, 10);

        if (inputValue.length > 2) {
            inputValue = inputValue.slice(0, 2) + '.' + inputValue.slice(2);
        }
        if (inputValue.length > 5) {
            inputValue = inputValue.slice(0, 5) + '.' + inputValue.slice(5, 9);
        }

        onChange(inputValue);
    };

    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>{label}</label>
            <input
                type="text"
                className={styles.input}
                value={value}
                onChange={handleInputChange}
                placeholder={placeholder || 'MM.DD.YYYY'}
            />
        </div>
    )
};
