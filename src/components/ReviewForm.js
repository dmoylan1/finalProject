import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid';

const ReviewForm = (props) => {
    const review = useState({
        reviewername: props.review ? props.review.reviewername : '',
        date: props.review ? props.review.date : '',
        content: props.review ? props.review.content : ''
    });

    const [errorMsg, setErrorMsg] = useState('');
    const { reviewername, date, content } = review;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [reviewername, date, content];
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
                content
            };
            props.handleOnSubmit(review);
        } else {
            errorMsg = 'Please fill out all fields.';
        }
        setErrorMsg(errorMsg);
    };



return (
    <div className='review-form'>
        {errorMsg && <p className='errorMsg'>{errorMsg}</p>}
        <Form onSubmit={handleOnSubmit}>
      <Form.Group className="mb-3" controlId="reviewName">
        <Form.Label>Name:</Form.Label>
        <Form.Control className='input-control' type="text" name='reviewername' placeholder="Enter Your Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="reviewDate">
        <Form.Label>Date:</Form.Label>
        <Form.Control className='input-control' type="date" name='date' placeholder="Date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="reviewContent">
        <Form.Label>Review:</Form.Label>
        <Form.Control className='input-control' type="text" name='content' placeholder="Enter Your Review Here" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
);
};

export default ReviewForm;

