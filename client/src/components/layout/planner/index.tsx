'use client'

import React, { useEffect, useState } from "react";
import { useTask } from "@/context/taskContext";
import { sortedTask } from "@/utils/helpers/taskArray";
import { countActiveTasks, countTasks } from "@/utils/helpers/tasksCounter";
import { getTasks } from "@/utils/api";
import { Tag, Card } from "@/components";
import Image from "next/image";
import Clipboard from '@/assets/clipboard.svg';

import './style.css'

export const Planner: React.FC = () => {
    const { tasks, updateTasks } = useTask();

    useEffect(() => {
        const fetchTasks = async () => {
            const res = await getTasks()
            updateTasks(res)
        };

        fetchTasks();
    }, [])

    const handleAwaitFech = () => {
        if (tasks && tasks.length !== 0) {
            return (
                <section className='container-task-grid'>
                    {sortedTask(tasks).map((task: { activated: boolean; description: string; id: string; }) => (
                        <Card key={task.id} id={task.id} activated={task.activated} description={task.description} />
                    ))}
                </section>
            )
        }

        if (tasks && tasks.length === 0) {
            return (
                <section className='no-task-feedback'>
                    <article className='no-task'>
                        <Image src={Clipboard} alt='Ícone Clipboard' />
                        <h3>Você ainda não tem tarefas cadastradas</h3>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </article>
                </section>
            )
        }

        return null;
    }

    return (
        <div className='container-task-main'>
            <section className='container-task-panel'>
                <div className='container-task-panel-content'>
                    <article className='container-task-panel-left'>
                        <h3>Tarefas criadas</h3>
                        <Tag>{countTasks(tasks)}</Tag>
                    </article>
                    <article className='container-task-panel-right'>
                        <h3>Concluídas</h3>
                        <Tag>{countActiveTasks(tasks)} de {countTasks(tasks)}</Tag>
                    </article>
                </div>
            </section>
            {handleAwaitFech()}
        </div>
    )
}