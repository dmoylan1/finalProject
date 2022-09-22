import React from "react";
import Fish from './../images/fish.jpg';
import img from './../Home.css';


function Home() {
    return (
        <>
        <h1>BettaDirect</h1>
        <p>The best place to get your Betta fish!</p>
        <img src={Fish} />
        </>
    );
}




// <Alert variant="success">
//       <Alert.Heading>BettaDirect</Alert.Heading>
//       <p>
//         The best place to get your Betta fish!
//       </p>
//       <hr />
//       <p className="mb-0">
//         Fish lovers, fish experts, what else could you want?
//       </p>
//     </Alert>

export default Home;