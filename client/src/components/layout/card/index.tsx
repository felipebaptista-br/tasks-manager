import React from "react"
import { Task } from "@/interfaces/taskInterfaces"
import { useTask } from "@/context/taskContext"
import { deleteTask, putTask } from "@/utils/api"
import { Checkbox } from "@/components"
import Image from "next/image"
import Trash from "@/assets/trash.svg"

import './style.css'

export const Card: React.FC<Task> = ({ id, activated, description }) => {
    const { updateTaskItem, removeTask } = useTask()

    const handleChangeCheckbox = async () => {
        const res = await putTask({ id, activated: !activated, description })
        if (res) {
            updateTaskItem(res)
        }
    }

    const handleDeleteTask = async () => {
        const res = await deleteTask(id)
        if (res === '') {
            removeTask(id)
        }
    }

    return (
        <div key={id} className='card-main'>
            <section className='card-content-left'>
                <Checkbox
                    checked={activated}
                    onChange={handleChangeCheckbox}
                />
            </section>
            <p className={activated ? 'card-content-center card-finish' : 'card-content-center'}>{description}</p>
            <section className='card-content-right'>
                <Image
                    className='card-trash'
                    onClick={() => handleDeleteTask()}
                    src={Trash}
                    alt="Ícone de lixeira"
                />
            </section>
        </div>
    )
}