import React from "react";

import styles from './Checkbox.module.sass'

export interface CheckboxProps {
    label: string;
    value: boolean;
    onChange: (checked: boolean) => void;
}

export const Checkbox = ({label, value, onChange}: CheckboxProps) => {
    const id = React.useId()

    return (
        <div className={styles.checkboxWrapper}>
            <input
                type="checkbox"
                className={styles.checkbox}
                checked={value}
                id={id}
                onChange={(e) => onChange(e.target.checked)}
            />
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
        </div>
    )
};
