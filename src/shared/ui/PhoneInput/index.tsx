import React, { useState } from 'react';
import styles from './PhoneInput.module.sass';

interface InputPhoneProps {
    label: string;
    value?: string;
    onChange: (value: string) => void;
}

const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '');

    const part1 = '+7';
    const part2 = digits.slice(1, 4);
    const part3 = digits.slice(4, 7);
    const part4 = digits.slice(7, 9);
    const part5 = digits.slice(9, 11);

    let formatted = part1;
    if (part2) formatted += ` (${part2}`;
    if (part3) formatted += `) ${part3}`;
    if (part4) formatted += `-${part4}`;
    if (part5) formatted += `-${part5}`;

    return formatted;
};

export const PhoneInput = ({ label, value = '', onChange }: InputPhoneProps) => {
    const [inputValue, setInputValue] = useState(value);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;

        const formattedValue = formatPhoneNumber(rawValue);

        setInputValue(formattedValue);
        onChange(formattedValue);
    };

    return (
        <div className={styles.inputWrapper}>
            <label className={styles.label}>{label}</label>
            <input
                type="text"
                className={styles.input}
                value={inputValue}
                onChange={handleChange}
                placeholder="+7 (___) ___-____"
                maxLength={18}
            />
        </div>
    );
};
