import styles from './Checkbox.module.sass'

export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox = ({ label, checked, onChange }: CheckboxProps) => (
    <div className={styles.checkboxWrapper}>
      <label className={styles.label}>
        <input
            type="checkbox"
            className={styles.checkbox}
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
        />
        {label}
      </label>
    </div>
);
