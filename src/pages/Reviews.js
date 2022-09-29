import React from "react";
import ReviewsList from "../components/ReviewsList";
import AddReview from '../components/AddReview';
import useLocalStorage from '../hooks/useLocalStorage';

function Reviews(props) {
    const [reviews, setReviews] = useLocalStorage('reviews', []);

    return (
        <>        
        <br />
        <h4>BettaDirect Customer Reviews</h4>
        <br />
        <ReviewsList {...props} reviews={reviews} setReviews={setReviews} />
        <AddReview {...props} reviews={reviews} setReviews={setReviews} />
    </>
    );
}

export default Reviews;