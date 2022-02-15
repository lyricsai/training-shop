import './ButtonLight.css'

export const ButtonLight = ({ text, size }) => {
    const s = { width: size }
    return <button className='btnLight' style={s} >{text}</button>
}