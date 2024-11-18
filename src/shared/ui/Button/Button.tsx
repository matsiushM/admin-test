import React, {ButtonHTMLAttributes} from 'react';

import styles from './Button.module.sass'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    type?: 'button' | 'submit' | 'reset',
    variant?: 'primary' | 'secondary' | 'danger',
    disabled?: boolean,
    className?: string,
    ref?: React.RefObject<HTMLButtonElement>
}

export const Button = ({
                           children,
                           type = 'button',
                           variant = 'primary',
                           disabled = false,
                           className,
                           ...props
                       }: ButtonProps) => {
    return (
        <button
            className={`${className} ${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''}`}
            {...props}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};