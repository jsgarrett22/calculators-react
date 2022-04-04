import React from "react";

const calculateSimpleInterest = (principal, rate, time) => principal * rate * time;

const convertRateToPercentage = rate => rate / 100;

export default function Display(props) {
    const intEarned = calculateSimpleInterest(props.principal, convertRateToPercentage(props.rate), props.years);

    // if the property 'frequency' doesn't exist, display simple interest calculation
    return (
        <main className="center">
            <p id="display">Account Value: {props.frequency !== 'undefined' && <span>{intEarned}</span>}</p>
        </main>
    )
}