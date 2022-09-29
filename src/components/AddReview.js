import React from 'react';
import ReviewForm from './ReviewForm';

const AddReview = ({ history, reviews, setReviews }) => {
    const handleOnSubmit = (review) => {
        setReviews([review, ...reviews]);
        history.push('/');
    };

    return (
        <React.Fragment>
        <ReviewForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default AddReview;