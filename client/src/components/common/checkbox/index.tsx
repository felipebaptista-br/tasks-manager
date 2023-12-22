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