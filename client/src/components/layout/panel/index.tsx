'use client'

import React, { useEffect, useState } from "react";
import { useTask } from "@/context/taskContext";
import { postTask } from "@/utils/api";
import { isEmptyString } from "@/utils/helpers/validateVariable";
import { Button, Input } from "@/components";
import Image from "next/image";
import Plus from '@/assets/plus.svg'

import './style.css'

export const Panel: React.FC = () => {
    const { updateTask } = useTask();
    const [dataInput, setDataInput] = useState<string>('');
    const [disabledButton, setDisabledButton] = useState<boolean>(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setDataInput(event.target.value)
    }

    const handleSubmit = async () => {
        setDisabledButton(true)

        if (!isEmptyString(dataInput)) {
            const res = await postTask({ activated: false, description: dataInput })

            updateTask({ id: res.id, activated: res.activated, description: res.description });

            setDisabledButton(false)
        } else {
            setDisabledButton(false)
        }
    }

    return (
        <div className='panel-main'>
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
        </div>
    )
}