import React from "react";
import Image from "next/image";
import Trash from "@/assets/trash.svg"
import { Checkbox } from "@/components";

import './style.css'

interface Props {
    id: string,
    activated: boolean,
    description: string
}

export const Card: React.FC<Props> = ({ id, activated, description }) => {
    return (
        <div key={id} className='card-main'>
            <section className='card-content-left'>
                <Checkbox checked={activated} />
            </section>
            <p className={activated ? 'card-content-center card-finish' : 'card-content-center'}>{description}</p>
            <section className='card-content-right'>
                <Image src={Trash} alt="Ícone de lixeira" />
            </section>
        </div>
    )
}