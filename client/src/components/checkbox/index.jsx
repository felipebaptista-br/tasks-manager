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
    const mode = JSON.parse(localStorage.getItem('mode'))
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
                    children='REMOVER'
                    type={2}
                    onClick={onRemove ? onRemove : undefined}
                />
            </label>
        </div>
    )
}