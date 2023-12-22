'use client'

import React, { useEffect } from "react";
import { useTask } from "@/context/taskContext";
import { sortedTask } from "@/utils/helpers/taskArray";
import { getTasks } from "@/utils/api";
import { Card } from "../card";
import { Loader } from "@/components";
import Image from "next/image";
import Clipboard from '@/assets/clipboard.svg';

import './style.css'

export const Catalog: React.FC = () => {
    const { tasks, updateTasks } = useTask()

    useEffect(() => {
        const fetchTasks = async () => {
            const res = await getTasks()
            updateTasks(res)
        };

        fetchTasks();
    }, [])

    if (tasks === undefined) {
        return <div className='catalog-undefined'><Loader activated /></div>
    }

    if (tasks.length === 0) {
        return (
            <section className='no-task-feedback'>
                <article className='no-task'>
                    <Image src={Clipboard} alt='Ícone Clipboard' />
                    <h3>Você ainda não tem tarefas cadastradas</h3>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </article>
            </section>
        );
    }

    return (
        <div className='catalog-grid'>
            {sortedTask(tasks).map((task: { activated: boolean; description: string; id: string; }) => (
                <Card
                    key={task.id}
                    id={task.id}
                    activated={task.activated}
                    description={task.description}
                />
            ))}
        </div>
    );
}