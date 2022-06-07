import { useState } from "react";
import "./RollDice.css";
import Die from "./Die";

const RollDice = (props) => {
    // set the value for each dice.
    const [diceOneValue, setDiceOneValue] = useState("");
    const [diceTwoValue, setDiceTwoValue] = useState("");

    // generate two different random numbers.
    const twoRandomNumber = () => {
        setDiceOneValue(Math.floor(Math.random() * 6) + 1);
        setDiceTwoValue(Math.floor(Math.random() * 6) + 1);
    };
    return (
        <div className='roll-dice__wrapper'>
            <Die diceOneValue={diceOneValue} diceTwoValue={diceTwoValue} />
            <button onClick={twoRandomNumber}>Roll Dice</button>
        </div>
    );
};

export default RollDice;
