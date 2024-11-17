import styles from './InputDate.module.sass';

export interface InputDateProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const DateInput = ({ label, value, onChange, placeholder }: InputDateProps) => (
    <div className={styles.inputWrapper}>
      <label className={styles.label}>{label}</label>
      <input
          type="text"
          className={styles.input}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          pattern="\d{2}/\d{2}/\d{4}"
      />
    </div>
);
