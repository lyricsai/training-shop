import './Collection.css'

const Collection = (props) => {
    return (
        <section className='collection'>
            <div>
                <img src={props.src} alt="pic" />
            </div>
            <div className='campaignTeaser'>
                <h4 className="campaignTeaser__title">{props.title}</h4>
                <h3 className="campaignTeaser__teaser">{props.text} <span className='accent'>{props.accent}</span></h3>
            </div>

        </section>
    )
}

export default Collection