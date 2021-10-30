import React, {useEffect, useState, useMemo} from 'react';
import axios from "axios";
import quizData from "../containers/Home";
let correctnum = 0;
function correct(setNumCorrect){
  setNumCorrect.push("correct");
}

function incorrect(){
}
function Question({setNumCorrect, question, answer, wrong=[], questionNum
 }) {
  const [disable, setDisable]=useState(false);
  return (
    <div>
      <h2 className="question"> {questionNum}) {question} </h2>
        <div className="answerWrapper">
          <button className="button" disabled={disable} onClick={() => {setDisable(true); correct(setNumCorrect); }} > {answer} </button>
          <button className="button" disabled={disable} onClick={() => {setDisable(true); incorrect();}} > {wrong[0]} </button>
          <button className="button" disabled={disable} onClick={() => {setDisable(true); incorrect();}} > {wrong[1]} </button>
          <button className="button" disabled={disable} onClick={() => {setDisable(true); incorrect();}} > {wrong[2]} </button>
      </div>
    </div>
  
  )
}


export default Question;
