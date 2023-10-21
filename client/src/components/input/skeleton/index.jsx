import { useSelector } from 'react-redux'
import './style.css'

export default function Skeleton() {
    const mode = useSelector(state => state.mode)
    return (<div className={mode === 'dark' ? 'ui-skeleton-input-dark' : 'ui-skeleton-input-light'} />)
}