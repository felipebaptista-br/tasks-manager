import { GoAlertFill } from 'react-icons/go'
import { BsFillCheckCircleFill } from 'react-icons/bs'

import './style.css'

export default function Alert({
    active,
    type,
    children
}) {
    if (active) {
        switch (type) {
            case 1:
                return (
                    <div className='ui-alert-container'>
                        <section className={`ui-alert ui-alert-${type}`}>
                            <p>{children}</p>
                            <BsFillCheckCircleFill size={30} />
                        </section>
                    </div>
                )
                break;

            case 2:
                return (
                    <div className='ui-alert-container'>
                        <section className={`ui-alert ui-alert-${type}`}>
                            <p>{children}</p>
                            <GoAlertFill size={30} />
                        </section>
                    </div>
                )
                break;

            default:
                break;
        }
    }
}