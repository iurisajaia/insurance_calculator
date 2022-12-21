const Button = ({label, onClick}) => {
    return (
        <button className="btn-primary" onClick={onClick}>
            {label}
        </button>
    )
}

export default Button;