import React from 'react';
import ReviewForm from './ReviewForm';

const AddReview = () => {
    const handleOnSubmit = (review) => {
        console.log(review);
    };

    return (
        <React.Fragment>
        <ReviewForm handleOnSubmit={handleOnSubmit} />
        </React.Fragment>
    );
};

export default AddReview;