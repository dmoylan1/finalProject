import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Reviews() {
    return (
        <>        
        <br />
        <h4>BettaDirect Customer Reviews</h4>
        <br />
        <Form>
      <Form.Group className="mb-3" controlId="reviewInput">
        <Form.Label>Enter your review here:</Form.Label>
        <Form.Control type="text" placeholder="Enter review" />
        <Form.Text className="text-muted">
          Please share your experiences with our company here!
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    </>
    );
}

export default Reviews;