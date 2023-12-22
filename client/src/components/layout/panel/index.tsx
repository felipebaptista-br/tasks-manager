'use client'

import React, { useState } from "react";
import { postTask } from "@/utils/api";
import { isEmptyString } from "@/utils/helpers/validateVariable";
import { Button, Input } from "@/components";
import Image from "next/image";
import Plus from '@/assets/plus.svg'

import './style.css'

export const Panel: React.FC = () => {
    const [dataInput, setDataInput] = useState<string>('');
    const [disabledButton, setDisabledButton] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setDataInput(event.target.value)
    }

    const handleSubmit = async () => {
        setDisabledButton(true)

        if (!isEmptyString(dataInput)) {
            const res = await postTask({ activated: false, description: dataInput })
            console.log(res);

            setDisabledButton(false)
        } else {
            setDisabledButton(false)
        }
    }

    return (
        <section className='panel-main'>
            <Input
                placeholder='Adicione uma nova tarefa'
                onChange={handleChange}
                value={dataInput}
            />
            <Button
                type='blue'
                onClick={() => handleSubmit()}
                disabled={disabledButton}
            >
                Criar
                <Image
                    className='panel-icon-plus'
                    src={Plus}
                    alt='Ícone de adição'
                />
            </Button>
        </section>
    )
}