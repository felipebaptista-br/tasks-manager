/**
 * React functional component for rendering a Tag.
 *
 * @param {Props} children - The children to be rendered within the Tag component.
 * @return {ReactElement} An article element with the 'ui-tag' class containing the children.
 */

import React, { ReactNode } from "react";

import './style.css'

interface Props {
    children: ReactNode;
}

export const Tag: React.FC<Props> = ({ children }) => {
    return <article className='ui-tag'>{children}</article>
}