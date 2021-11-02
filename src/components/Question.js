import React, {useEffect, useState, useMemo} from 'react';
import axios from "axios";
import quizData from "../containers/Home";
let correctnum = 0;


function Question({setNumCorrect, numCorrect, question, answer, wrong=[], questionNum
 }) {
  const [disable, setDisable]=useState(false);
  function correct(){
    const correct = [...numCorrect];
    correct.push("correct");
    setNumCorrect(correct);
    return(setNumCorrect)

  }

  return (
    <div>
      <h3 className="question"> {questionNum}) {question} </h3>
        <div className="answerWrapper">
          <button className="button"
            disabled={disable}
            onClick={() => {setDisable(true); correct();}}>
            {answer}
           </button>
          <button className="button"
            disabled={disable}
            onClick={() => {setDisable(true);}} >
            {wrong[0]}
          </button>
          <button className="button"
            disabled={disable}
            onClick={() => {setDisable(true);}} >
            {wrong[1]}
          </button>
          <button className="button"
            disabled={disable}
            onClick={() => {setDisable(true);}} >
            {wrong[2]}
          </button>
      </div>
    </div>

  )
}


export default Question;
