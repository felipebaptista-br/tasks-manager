import React, { ReactNode } from 'react';

import './style.css';

interface Props {
    children: ReactNode;
}

export const Container: React.FC<Props> = ({ children }) => {
    return (
        <div className='container'><section className='container-content'>{children}</section></div>
    )
}