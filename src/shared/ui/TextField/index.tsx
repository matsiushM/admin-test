import styles from './TextField.module.sass';

export interface InputTextProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
}

export const TextField = ({label, value, onChange, placeholder}: InputTextProps) => (
    <div className={styles.inputWrapper}>
        <label className={styles.label}>{label}</label>
        <input
            type="text"
            className={styles.input}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
        />
    </div>
);
