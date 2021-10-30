import React, {useEffect, useState, useMemo} from 'react';
import axios from "axios";
import { useLocation } from "react-router-dom";
import Data from "../components/Data.json";
import Image from '../components/Image';
import Question from '../components/Question';

function Home(){
  const[quizData, setQuizData] = useState([]);
  const[numCorrect, setNumCorrect] = useState([]);
  const[amount, setAmount] = useState(15);
  const[difficulty, setDifficulty] = useState("medium");
  useEffect(() =>{
      axios
        .get(
          `https://opentdb.com/api.php?amount=${amount}&category=27&difficulty=${difficulty}&type=multiple`
        )
        .then(function (response){
          setQuizData(response.data.results);
        })
        .catch(function(error){
          console.warn(error);
        });
  }, []);

  return(

    <main>
    <div className="pageWrapper">
    <h1>Take this quiz for an Animal Picture </h1>
      <div className="questionAnswerWrapper">
        {quizData && quizData.map((question, i) =>
          <Question
            setNumCorrect={numCorrect}
            question={quizData[i].question}
            answer={quizData[i].correct_answer}
            wrong={quizData[i].incorrect_answers}
            questionNum={i}
          />
        )}
      </div>
      <Image
        setNumCorrect={numCorrect}
      />
      </div>

    </main>

  )
}
export default Home;
