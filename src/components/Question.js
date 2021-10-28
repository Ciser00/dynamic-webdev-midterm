import React, {useEffect, useState, useMemo} from 'react';
import axios from "axios";
import quizData from "../containers/Home";
let correctnum = 0;

function addone(correctnum){
  correctnum+=1
  console.log(correctnum)
  return(correctnum)

}

function Question({setCorrectAnswers, question, answer, wrong=[]
 }) {
  const [selectedAnswer, setSelectedAnswer] = useState(0);
  return (
    <div>
      <p> {question} </p>
    <button onClick={() => (selectedAnswer + 1)}> {answer} </button>
    <button onClick={() => console.log(selectedAnswer)}> {wrong[0]} </button>
    <button onClick={() => {console.log('wrong')}}> {wrong[1]} </button>
    <button onClick={() => {console.log('wrong') }}> {wrong[2]} </button>
  </div>
  )
}

export default Question;
