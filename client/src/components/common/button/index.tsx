/**
 * React functional component for rendering a button.
 *
 * @param {Props} children - the content of the button
 * @param {string} className - the CSS class for styling
 * @param {string} type - the type of button (e.g. primary, secondary)
 * @param {object} style - inline styles for the button
 * @param {function} onClick - function to be executed on button click
 * @param {boolean} disabled - whether the button is disabled
 * @return {JSX.Element} the rendered button element
 */

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