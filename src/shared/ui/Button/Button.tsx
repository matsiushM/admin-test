import React from 'react';

import styles from './Button.module.sass'

export interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    variant?: 'primary' | 'secondary' | 'danger';
    disabled?: boolean;
    className?: string
}

export const Button = ({
                           children,
                           onClick,
                           type = 'button',
                           variant = 'primary',
                           disabled = false,
                           className,
                       }: ButtonProps) => {
    return (
        <button
            className={`${className} ${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {children}
        </button>
    );
};