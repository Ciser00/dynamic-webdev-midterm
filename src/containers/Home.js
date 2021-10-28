import React, {useEffect, useState, useMemo} from 'react';
import axios from "axios";
import { useLocation } from "react-router-dom";
import Data from "../components/Data.json";
import Quiz from '../components/Quiz';
import Question from '../components/Question';
const correctnum = 0;
const difficulty = 'medium';

function Home(){
const[quizData, setQuizData] = useState([]);
  useEffect(() =>{
      axios
        .get(
          `https://opentdb.com/api.php?amount=10&category=27&difficulty=${difficulty}&type=multiple`
        )
        .then(function (response){
          setQuizData(response.data.results);
        })
        .catch(function(error){
          console.warn(error);
        });
  }, []);
//get erros on refresh
//have to cut out question card and reload page then paste it to fix
return(
    <main>
      Midterm
        <div>
      <Question
        question={quizData[0].question}
        answer={quizData[0].correct_answer}
        wrong={quizData[0].incorrect_answers}
      />
      <Question
        question={quizData[1].question}
        answer={quizData[1].correct_answer}
        wrong={quizData[1].incorrect_answers}
      />
      <Question
        question={quizData[2].question}
        answer={quizData[2].correct_answer}
        wrong={quizData[2].incorrect_answers}
      />
      <Question
        question={quizData[3].question}
        answer={quizData[3].correct_answer}
        wrong={quizData[3].incorrect_answers}
      />
      <Question
        question={quizData[4].question}
        answer={quizData[4].correct_answer}
        wrong={quizData[4].incorrect_answers}
      />
      <Question
        question={quizData[5].question}
        answer={quizData[5].correct_answer}
        wrong={quizData[5].incorrect_answers}
      />
      <Question
        question={quizData[6].question}
        answer={quizData[6].correct_answer}
        wrong={quizData[6].incorrect_answers}
      />
      <Question
        question={quizData[7].question}
        answer={quizData[7].correct_answer}
        wrong={quizData[7].incorrect_answers}
      />
      <Question
        question={quizData[8].question}
        answer={quizData[8].correct_answer}
        wrong={quizData[8].incorrect_answers}
      />
      //<Quiz/>
        </div>
    </main>
  )
}
export default Home;
