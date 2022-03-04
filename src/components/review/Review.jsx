import Rating from '../rating/Rating'
import './Review.css'

const Review = ({ name, review, time, rating }) => {
    return (
        <div className="review">
            <div><h5 className="reviewer">{name}</h5>
                <span>
                    <span className="review__time">{time}</span>

                    <Rating rating={rating} />

                </span>
            </div>
            <p>{review}</p>
        </div>
    )
}

export default Review