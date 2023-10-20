
import { useSelector } from 'react-redux'
import './style.css'

export default function Input({
    id,
    type,
    placeholder,
    onChange
}) {
    const mode = useSelector(state => state.mode)
    return (
        <input
            id={id ? id : undefined}
            className={`ui-input ${mode === 'dark' ? 'ui-input-dark' : 'ui-input-light'}`}
            type={type ? type : undefined}
            placeholder={placeholder ? placeholder : undefined}
            onChange={onChange ? onChange : undefined}
        />
    )
}