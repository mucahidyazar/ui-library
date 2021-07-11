import React from 'react';
import { Label } from './Label';
import { Input } from './Input';
import { Textarea } from './Textarea';
interface FieldComposition {
    Label: typeof Label;
    Input: typeof Input;
    Textarea: typeof Textarea;
}
export declare const Field: React.FC & FieldComposition;
export {};
