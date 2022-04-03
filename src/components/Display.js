import React from "react";

const calculateSimpleInterest = (principal, rate, time) => principal * rate * time;

const convertRateToPercentage = rate => rate / 100;

export default function Display(props) {
    const intEarned = calculateSimpleInterest(props.principal, convertRateToPercentage(props.rate), props.years);
    return (
        <main className="center">
            <p id="display">Account Value: <span>{intEarned}</span></p>
        </main>
    )
}