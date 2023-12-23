'use client'

import React from 'react'
import { TaskProvider } from '@/context/taskContext'
import { Button, Card, Input } from '@/components'

import './style.css'

export default function UI() {

    return (
        <TaskProvider>
            <main className='ui-main'>
                <div className='colors'>
                    <h1>Cores</h1>
                    <div className='colors-product'>
                        <h2>Produto</h2>
                        <div className='colors-grid'>
                            <div className='colors-item'>
                                <article style={{ backgroundColor: 'var(--purple)' }} className='colors-background' />
                                <p className='colors-title'>#8284FA</p>
                                <p>purple</p>
                            </div>
                            <div className='colors-item'>
                                <article style={{ backgroundColor: 'var(--purple-dark)' }} className='colors-background' />
                                <p className='colors-title'>#5E60CE</p>
                                <p>purple-dark</p>
                            </div>
                            <div className='colors-item'>
                                <article style={{ backgroundColor: 'var(--blue)' }} className='colors-background' />
                                <p className='colors-title'>#4EA8DE</p>
                                <p>blue</p>
                            </div>
                            <div className='colors-item'>
                                <article style={{ backgroundColor: 'var(--blue-dark)' }} className='colors-background' />
                                <p className='colors-title'>#1E6F9F</p>
                                <p>blue-dark</p>
                            </div>
                        </div>
                    </div>
                    <div className='colors-base'>
                        <h2>Base</h2>
                        <div className='colors-grid'>
                            <div className='colors-item'>
                                <article style={{ backgroundColor: 'var(--gray-700)' }} className='colors-background' />
                                <p className='colors-title'>#0D0D0D</p>
                                <p>gray 700</p>
                            </div>
                            <div className='colors-item'>
                                <article style={{ backgroundColor: 'var(--gray-600)' }} className='colors-background' />
                                <p className='colors-title'>#1A1A1A</p>
                                <p>gray 600</p>
                            </div>
                            <div className='colors-item'>
                                <article style={{ backgroundColor: 'var(--gray-500)' }} className='colors-background' />
                                <p className='colors-title'>#262626</p>
                                <p>gray 500</p>
                            </div>
                            <div className='colors-item'>
                                <article style={{ backgroundColor: 'var(--gray-500)' }} className='colors-background' />
                                <p className='colors-title'>#333333</p>
                                <p>gray 400</p>
                            </div>
                            <div className='colors-item'>
                                <article style={{ backgroundColor: 'var(--gray-300)' }} className='colors-background' />
                                <p className='colors-title'>#808080</p>
                                <p>gray 300</p>
                            </div>
                            <div className='colors-item'>
                                <article style={{ backgroundColor: 'var(--gray-200)' }} className='colors-background' />
                                <p className='colors-title'>#D9D9D9</p>
                                <p>gray 200</p>
                            </div>
                            <div className='colors-item'>
                                <article style={{ backgroundColor: 'var(--gray-100)' }} className='colors-background' />
                                <p className='colors-title'>#F2F2F2</p>
                                <p>gray 100</p>
                            </div>
                            <div className='colors-item'>
                                <article style={{ backgroundColor: 'var(--danger)' }} className='colors-background' />
                                <p className='colors-title'>#E25858</p>
                                <p>danger</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='components'>
                    <h1>Componentes</h1>
                    <div className='components-flex'>
                        <div className='components-item'>
                            <h2>Input</h2>
                            <article className='components-division'>
                                <Input placeholder='Adicione uma nova tarefa' />
                                <Input value='Descrição da tarefa |' />
                            </article>
                        </div>
                        <div className='components-item'>
                            <h2>Task</h2>
                            <article className='components-division'>
                                <Card id='1' activated={false} description='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' />
                                <Card id='2' activated description='Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.' />
                            </article>
                        </div>
                        <div className='components-item'>
                            <h2>Button</h2>
                            <article className='components-division'>
                                <Button
                                    children='Type default'
                                />
                                <Button
                                    children='Type default (disabled)'
                                    disabled
                                />
                                <Button
                                    children='Type Blue'
                                    type='blue'
                                />
                                <Button
                                    children='Type Blue (disabled)'
                                    type='blue'
                                    disabled
                                />
                            </article>
                        </div>
                    </div>
                </div>
            </main>
        </TaskProvider>
    )
}