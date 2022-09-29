import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid';

const ReviewForm = (props) => {
    const [review, setReview] = useState(() => {
        return {
        reviewername: props.review ? props.review.reviewername : '',
        date: props.review ? props.review.date : '',
        content: props.review ? props.review.content : '',
        rating: props.review ? props.review.rating : '',
        numberfish: props.review ? props.review.numberfish : ''
        };
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { reviewername, content, rating, numberfish } = review;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [reviewername, content, rating, numberfish];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            const review = {
                id: uuidv4(),
                reviewername,
                date: new Date(),
                content,
                rating,
                numberfish
            };
            props.handleOnSubmit(review);
        } else {
            errorMsg = 'Please fill out all fields.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'rating':
                if (value === '' || parseInt(value) === +value) {
                    setReview((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            case 'numberfish':
                if (value === '' || parseInt(value) === +value) {
                    setReview((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            default:
                setReview((prevState) => ({
                    ...prevState,
                    [name]: value
                }));
            }
        };



return (
    <div className='review-form'>
        {errorMsg && <p className='errorMsg'>{errorMsg}</p>}
        <Form onSubmit={handleOnSubmit}>
      <Form.Group 
        className="mb-3" 
        controlId="reviewName">
        <Form.Label>Name:</Form.Label>
        <Form.Control 
            className='input-control' 
            type="text" 
            name='reviewername' 
            placeholder="Enter Your Name"
            onChange={handleInputChange} />
      </Form.Group>

      <Form.Group 
        className="mb-3" 
        controlId="numberFish">
        <Form.Label>Number of Fish Owned:</Form.Label>
        <Form.Control 
            className='input-control' 
            type="number" 
            name='numberfish' 
            value={numberfish}
            placeholder="How many fish do you have?"
            onChange={handleInputChange} />
      </Form.Group>

      <Form.Group 
        className="mb-3" 
        controlId="reviewContent">
        <Form.Label>Review:</Form.Label>
        <Form.Control 
            className='input-control' 
            type="text" name='content'
            value={content} 
            placeholder="Enter Your Review Here"
            onChange={handleInputChange} />
      </Form.Group>

      <Form.Group 
        className="mb-3" 
        controlId="reviewRating">
        <Form.Label>Rating:</Form.Label>
        <Form.Control 
            className='input-control' 
            type="number" name='rating'
            value={rating} 
            placeholder="Rate us out of 10"
            onChange={handleInputChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
);
};

export default ReviewForm;