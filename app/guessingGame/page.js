"use client"
import {useState} from "react"

const guessingGame = () => {
    const [randomNumber, setRandomNumber] = useState(
        Math.floor(Math.random() * 100 + 1)
    );

    const [attempts, setAttempts] = useState(0);

    const [feedbackMsg, setFeedbackMsg] = useState("");

    const [userWins, setUserWins] = useState(false);


    const handleGuess = () => {
        const guess = parseInt(document.getElementById("guess").value)
        setAttempts(attempts + 1);

        const parsedGuess = parseInt(guess);


        if (isNaN(parsedGuess)) {
            setFeedbackMsg("Invalid, please enter a number");
            return;
        }
    
        //Using switch statement
        switch (true) {
            case parsedGuess < randomNumber:
              setFeedbackMsg('This is too low!');
             break;
            case parsedGuess > randomNumber:
              setFeedbackMsg('This is too high!');
              break;
            case parsedGuess === randomNumber:
              setFeedbackMsg(`You are correct, yayyyyyy!`);
              setUserWins(true)
              break;
            
        }
    
    
    };


  return (
    <div>
        <h1>This is a Guessing Game</h1>
        <p>Enter a number between 1 and 100</p>

        <input type="number" id="guess"/>

        <button onClick={handleGuess} id="submitBtn">Submit Guess</button>

        <p id="feedbackMsg">  {feedbackMsg} </p>
       

        {/* <p id="attempts">Attempts: {attempts} </p> */}

        {/* //Attempts to not show when user wins */}
        {!userWins && <p>Attempts: {attempts}</p>}

        <p>Secret Number: {randomNumber}</p>

    


    </div>
  )
};

export default guessingGame