import React from "react";
import "./Score.css";
import { FaArrowRight } from 'react-icons/fa';

//stateless component
const Score = props => (
  <div className="gameScore bg-primary">
    <h3 className="score">Your Current Score:  {props.total}</h3>
    <small className="text-center">Happy Playing!!</small>
    <h3 className="status">{props.status}</h3>
  </div>
);

export default Score;
