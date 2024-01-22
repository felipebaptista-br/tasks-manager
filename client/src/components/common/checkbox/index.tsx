/**
 * Renders a checkbox input element.
 *
 * @param {Props} checked - Indicates if the checkbox is checked
 * @param {Props} className - Additional CSS class for styling
 * @param {Props} onChange - Event handler for when the checkbox state changes
 * @return {JSX.Element} The checkbox input element
 */

import React from "react";

import './style.css'

interface Props {
    checked: boolean,
    className?: string,
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: React.FC<Props> = ({ checked, className, onChange }) => {    
    return <input
        type="checkbox"
        className={className ? `ui-checkbox ${className}` : 'ui-checkbox'}
        checked={checked}
        onChange={onChange}
    />
}