import React from 'react';
export interface TextareaProps extends React.ComponentPropsWithoutRef<'textarea'> {
    isResizable?: boolean;
}
export declare const Textarea: React.ForwardRefExoticComponent<TextareaProps & React.RefAttributes<HTMLTextAreaElement>>;
