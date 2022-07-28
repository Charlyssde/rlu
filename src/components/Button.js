import '../styles/button.css'

export const Button = (props) => {
    const {
        text,
        action
    } = props;

    return (
        <div onClick={action} className={'button'}>
            {text}
        </div>
    )
}
