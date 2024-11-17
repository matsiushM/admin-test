import React from 'react';

import styles from './Select.module.sass';

interface Option {
    value: string;
    name: string;
}

interface SelectProps {
    label: string;
    options: Option[];
    value?: string;
    onChange: (value: string) => void;
}

export const Select = ({ label, options, value = '', onChange }: SelectProps) => {
    const [selectedValue, setSelectedValue] = React.useState(value);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newValue = e.target.value;
        setSelectedValue(newValue);
        onChange(newValue);
    };

    return (
        <div className={styles.dropdownWrapper}>
            <label className={styles.label}>{label}</label>
            <select className={styles.select} value={selectedValue} onChange={handleChange}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};
