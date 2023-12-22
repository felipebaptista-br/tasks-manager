import React from "react";

import './style.css'

interface Props {
    activated: boolean
}

export const Loader: React.FC<Props> = ({
    activated
}) => {
    if (activated) {
        return <span className='loader' />
    }
}