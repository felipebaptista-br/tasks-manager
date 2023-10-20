import './style.css'

export default function Button({
    children,
    onClick,
    type,
    style
}) {
    return (
        <button
            style={style ? style : undefined}
            onClick={onClick ? onClick : undefined}
            className={`ui-button ui-button-${type ? type : undefined}`}>
            {children}
        </button>
    )
}