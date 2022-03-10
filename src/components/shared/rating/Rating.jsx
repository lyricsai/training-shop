import './Rating.css'

const Rating = ({ rating }) => {

    const starMinusStyle = { color: '#e6e6e6' }
    const starPlus = <i className="rating__star icon-star"></i>
    const starMinus = <i className="icon-star" style={starMinusStyle}></i>

    let rendering = []

    for (let i = 1; i <= rating; i++) {
        rendering.push(starPlus)
    }

    for (let i = 1; i <= 5 - rating; i++) {
        rendering.push(starMinus)
    }

    return (
        <div className='rating'>
            <span className="rating__result"></span>
            <ul>{rendering.map((element,index)=><li key={index}>{element}</li> )}</ul>
        </div>
    )
}

export default Rating
