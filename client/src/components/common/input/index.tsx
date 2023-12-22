import React, { KeyboardEvent } from "react";

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
