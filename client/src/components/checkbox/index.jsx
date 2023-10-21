'use client'

import { useState } from 'react'
import { useSelector } from 'react-redux'
import { MdDelete } from 'react-icons/md'
import Button from '@/components/button'

import './style.css'

export default function Checkbox({
    id,
    name,
    checked,
    children,
    onChange,
    onRemove,
}) {
    const mode = useSelector(state => state.mode)
    let mediaQuery
    if (typeof window !== "undefined") {
        mediaQuery = window.matchMedia("(max-width: 1000px)")
    }
    return (
        <div className={`ui-checkbox ${mode === 'dark' ? 'ui-checkbox-dark' : 'ui-checkbox-ligh'}`}>
            <input
                type="checkbox"
                id={id ? id : undefined}
                name={name ? name : undefined}
                checked={checked}
                onChange={onChange}
            />
            <label
                className={`ui-checkbox-label ${mode === 'dark' ? 'ui-checkbox-label-dark' : 'ui-checkbox-label-light'}`}
                htmlFor={name ? name : undefined}
            >
                <p className={checked ? 'ui-checkbox-label-checked' : undefined}>{children}</p>
                <Button
                    children={typeof window !== "undefined" ? mediaQuery.matches ? <MdDelete size={20} /> : 'REMOVER' : 'REMOVER'}
                    type={2}
                    onClick={onRemove ? onRemove : undefined}
                />
            </label>
        </div>
    )
}