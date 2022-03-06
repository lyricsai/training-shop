import './ButtonDark.css'

export const ButtonDark = ({ text, size = 'initial', padding = 0 }) => {
    const s = {
        width: size,
        padding: padding
    }
    return <button className='btnDark' style={s} >{text}</button>
}