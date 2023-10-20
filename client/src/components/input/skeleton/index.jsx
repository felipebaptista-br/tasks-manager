import './style.css'

export default function Skeleton() {
    const mode = JSON.parse(localStorage.getItem('mode'))
    return (<div className={mode === 'dark' ? 'ui-skeleton-input-dark' : 'ui-skeleton-input-light'} />)
}