/**
 * React functional component for rendering an input element.
 *
 * @param {Props} id - the unique identifier for the input
 * @param {string} type - the type of the input (default is 'text')
 * @param {string} placeholder - the placeholder text for the input
 * @param {string} className - the CSS class for styling the input
 * @param {string} value - the value of the input (default is an empty string)
 * @param {object} style - the inline style for the input
 * @param {Function} onChange - the event handler for input change
 * @param {Function} onKeyDown - the event handler for key down
 * @return {JSX.Element} the input element
 */

import React from "react";

import './style.css'

interface Props {
    id?: string;
    type?: string;
    placeholder?: string;
    className?: string;
    value?: string;
    style?: React.CSSProperties;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const Input: React.FC<Props> = ({
    id,
    type = 'text',
    placeholder,
    className,
    value = '',
    style,
    onChange,
    onKeyDown
}) => {
    return (
        <input
            id={id}
            type={type}
            placeholder={placeholder}
            className={className ? `ui-input ${className}` : 'ui-input'}
            style={style}
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    )
}
