/**
 * Renders a loader component if activated is true.
 *
 * @param {boolean} activated - Indicates whether the loader should be activated
 * @return {JSX.Element} The loader component if activated is true, otherwise null
 */

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