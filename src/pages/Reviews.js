import React from "react";
import ReviewsList from "../components/ReviewsList";
import AddReview from '../components/AddReview';






function Reviews() {
    return (
        <>        
        <br />
        <h4>BettaDirect Customer Reviews</h4>
        <br />
        <ReviewsList />
        <AddReview />

    </>
    );
}

export default Reviews;