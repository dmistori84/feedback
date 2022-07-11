//import { Component } from "react";

export const Statistics = ({good, neutral, bad}) => {
    
        return (
            <div>
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                </ul>
            </div>
        )
};