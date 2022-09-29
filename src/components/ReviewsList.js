import React from "react";
import _ from 'lodash';
import Review from "./Review";


const ReviewsList = ({ reviews, setReviews }) => {

    const handleRemoveReview = (id) => {
        setReviews(reviews.filter((review) => review.id !== id));
    };

    return (
    <React.Fragment>
        <div className="review-list">
            {!_.isEmpty(reviews) ? (
                reviews.map((review) => (
                    <Review key={review.id} {...review} handleRemoveReview={handleRemoveReview} />
                ))
    ) : (
        <p>No reviews yet.</p>
            )}
        </div>
    </React.Fragment>
    );
};

export default ReviewsList;