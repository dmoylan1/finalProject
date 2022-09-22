import React from "react";
import Table from 'react-bootstrap/Table';

function Pricing() {
    return (
        <>        <h1>Betta Fish Pricing Information</h1>
        
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Veiltail</td>
                    <td>Long, flowing tail that swoops downward. Come s in many color variations.</td>
                    <td>$3.99</td>
                </tr>
                <tr>
                    <td>Crowntail</td>
                    <td>Distinctive fringed fins that flow as they swim. Can be aggressive.</td>
                    <td>$4.50</td>
                </tr>
                <tr>
                    <td>Butterfly</td>
                    <td>Multi-colored bodies and can have a few different tail types.</td>
                    <td>$12.99</td>
                </tr>
                <tr>
                    <td>Halfmoon</td>
                    <td>Tail looks like a half-moon or semicircle and flares to 180 degrees. Aka double tail bettas.</td>
                    <td>$26.99</td>
                </tr>
                <tr>
                    <td>Elephant Ear</td>
                    <td>Enormous fins and tail that resemble the ears of an elephant.</td>
                    <td>$14.99</td>
                </tr>
                <tr>
                    <td>RoseTail</td>
                    <td>Large flowing D-shaped caudal fin.</td>
                    <td>$19.99</td>
                </tr>
                <tr>
                    <td>Paradise</td>
                    <td>Usually blue body with yellowish fins. Can sometimes be three colors.</td>
                    <td>$19.99</td>
                </tr>
            </tbody>
        </Table>
        </>

    );
}

export default Pricing;