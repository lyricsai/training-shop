import './Rating.css'

const Rating = () => {

    // const ratingStars = [...document.getElementsByClassName("rating__star")];
    // const ratingResult = document.querySelector(".rating__result");

    // printRatingResult(ratingResult);

    // function executeRating(stars, result) {
    //     const starClassActive = "rating__star icon-star";
    //     const starClassUnactive = "rating__star icon-star";
    //     const starsLength = stars.length;
    //     let i;
    //     stars.map((star) => {
    //         star.onclick = () => {
    //             i = stars.indexOf(star);

    //             if (star.className.indexOf(starClassUnactive) !== -1) {
    //                 printRatingResult(result, i + 1);
    //                 for (i; i >= 0; --i) stars[i].className = starClassActive;
    //             } else {
    //                 printRatingResult(result, i);
    //                 for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
    //             }
    //         };
    //     });
    // }

    // function printRatingResult(result, num = 0) {
    //     result.textContent = `${num}/5`;
    // }

    // executeRating(ratingStars, ratingResult);

    return (
        <div className='rating'>
            <span className="rating__result"></span>
            <i className="rating__star icon-star"></i>
            <i className="rating__star icon-star"></i>
            <i className="rating__star icon-star"></i>
            <i className="rating__star icon-star"></i>
            <i className="rating__star icon-star"></i>
        </div>
    )
}

export default Rating
