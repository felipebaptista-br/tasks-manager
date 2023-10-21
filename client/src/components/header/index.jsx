'use client'

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setMode } from '@/redux/reducers/mode'
import { FcTodoList } from 'react-icons/fc'
import { MdDarkMode } from 'react-icons/md'
import { VscGithub } from 'react-icons/vsc'

import './style.css'

export default function Header() {
    const dispatch = useDispatch()
    const mode = useSelector(state => state.mode)

    useEffect(() => {
        if (typeof window !== "undefined") {
            const modeStorage = JSON.parse(localStorage.getItem('mode'))
            dispatch(setMode(modeStorage))
        }
    }, [])

    const handleMode = async () => {
        if (mode === 'light') {
            dispatch(setMode('dark'))
        } else {
            dispatch(setMode('light'))
        }
    }

    return (
        <header className={`ui-header ${mode === 'dark' ? 'ui-header-dark' : 'ui-header-light'}`}>
            <div className='ui-header-content'>
                <FcTodoList className='ui-header-icons' size={30} />
                <section className='ui-header-options'>
                    <MdDarkMode
                        color={mode === 'dark' ? 'white' : ''}
                        onClick={() => handleMode()}
                        className='ui-header-icons icon-mode-light'
                        size={30}
                    />
                    <VscGithub
                        color={mode === 'dark' ? 'white' : ''}
                        onClick={() => window.location.href = 'https://github.com/felipebaptista-br'}
                        className='ui-header-icons icon-github-light'
                        size={30}
                    />
                </section>
            </div>
        </header>
    )
}