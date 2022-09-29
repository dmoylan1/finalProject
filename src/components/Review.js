import React from "react";
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Review = ({
    id,
    reviewername,
    date,
    content,
    rating,
    numberfish,
    handleRemoveReview
}) => {
    const history = useNavigate();

    return (
        <Card style={{width: '400px'}}>
            <Card.Body>
                <Card.Title>{reviewername}</Card.Title>
                <div>
                    <div>Date: {new Date(date).toDateString()}</div>
                    <div>Review: {content}</div>
                    <div>Rating: {rating}</div>
                    <div>Number of Fish Owned: {numberfish}</div>
                </div>
                <Button variant="danger" onClick={() => handleRemoveReview(id)}>Delete</Button>
            </Card.Body>
        </Card>
    );
};

export default Review;