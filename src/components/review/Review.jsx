import './Review.css'

const Review = ({ name, review, time, rating }) => {
    return (
        <div className="review">
            <div><h5 className="reviewer">{name}</h5>
                <span>
                    <span className="review__time">{time}</span>

                    <span className="review__stars">
                        <i className="icon-star rating__star "></i>
                        <i className="icon-star rating__star "></i>
                        <i className="icon-star rating__star "></i>
                        <i className="icon-star rating__star "></i>
                        <i className="icon-star rating__star "></i>
                    </span>

                </span>
            </div>
            <p>{review}</p>
        </div>
    )
}

export default Review