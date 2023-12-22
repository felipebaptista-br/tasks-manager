import React, { ReactNode } from "react";

import './style.css'

interface Props {
    children: ReactNode;
    className?: string;
    type?: string;
    style?: React.CSSProperties;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean 
}

export const Button: React.FC<Props> = ({
    children,
    className,
    type,
    style,
    onClick,
    disabled
}) => {
    return (
        <button
            className={className ?
                `ui-button ui-button-${type} ${className}` :
                `ui-button ui-button-${type}`
            }
            onClick={onClick}
            style={style}
            disabled={disabled}
        >
            {children}
        </button>
    )
}