import { LuListTodo } from 'react-icons/lu'

import './style.css'
import { useSelector } from 'react-redux'

export default function Card({
    title,
    description,
    children
}) {
    const mode = useSelector(state => state.mode)
    return (
        <div className={`ui-card ${mode === 'dark' ? 'ui-card-dark' : 'ui-card-light'}`}>
            <section className={`ui-card-panel ${mode === 'dark' ? 'ui-card-panel-dark' : 'ui-card-panel-light'}`}>
                <article className='ui-card-panel-initial'>
                    <h2>{title ? title : undefined}</h2>
                    <LuListTodo color={mode === 'dark' ? 'white' : ''} size={30} />
                </article>
                <p>{description ? description : undefined}</p>
            </section>
            <section className='ui-card-content'>
                {children ? children : undefined}
            </section>
        </div>
    )
}