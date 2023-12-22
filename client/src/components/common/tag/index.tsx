import React, { ReactNode } from "react";

import './style.css'

interface Props {
    children: ReactNode;
}

export const Tag: React.FC<Props> = ({ children }) => {
    return <article className='tag-main'>{children}</article>
}