import './Policy.css'

const Policy = (props) => {
    return (
        <div className="main__policy">
            <div className="main__policy_icon"><i className={props.icon}></i></div>
            <div className="main__policy_container">
                <div className="main__policy_title">{props.title}</div>
                <div className="main__policy_text">{props.text}</div>
            </div>
        </div>
    )
}

export default Policy