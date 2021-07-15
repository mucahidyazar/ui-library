import React from 'react';
export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    children?: React.ReactNode;
    variant?: 'secondary' | 'primary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    isFullWidth?: boolean;
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
export default Button;
