import React from "react";
import {Container, Card} from 'react-bootstrap';

function About() {
    return (
        <Container className='p-4'><Card>
            <Card.Body>
                <Card.Title>About BettaDirect</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    Serving all your Betta Fish needs since 1990!
                </Card.Subtitle>
                <Card.Text>
                    BettaDirect is your one-stop shop for everything Betta! We started as a small 
                    family store in Keene, NH and have grown into a national online business! Our company 
                    prides itself on our extensive knowledge of Betta Fish and the quality, health and 
                    beauty of each fish we sell. Our customers keep coming back year after year, fish after
                    fish! Don't believe us? Head over to our 'Reviews' tab and see what they think for yourself!
                </Card.Text>
            </Card.Body>
        </Card>
        </Container>
    )
}

export default About;