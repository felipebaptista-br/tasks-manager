'use client'

import React from "react";
import { useTask } from "@/context/taskContext";
import { countActiveTasks, countTasks } from "@/utils/helpers/tasksCounter";
import { Catalog, Tag } from "@/components";

import './style.css'

export const Planner: React.FC = () => {
    const { tasks } = useTask();

    return (
        <div className='container-task-main'>
            <section className='container-task-panel'>
                <div className='container-task-panel-content'>
                    <article className='container-task-panel-left'>
                        <h3>Tarefas criadas</h3>
                        <Tag>{countTasks(tasks ? tasks : [])}</Tag>
                    </article>
                    <article className='container-task-panel-right'>
                        <h3>Concluídas</h3>
                        <Tag>{countActiveTasks(tasks ? tasks : [])} de {countTasks(tasks ? tasks : [])}</Tag>
                    </article>
                </div>
            </section>
            <Catalog />
        </div>
    )
}