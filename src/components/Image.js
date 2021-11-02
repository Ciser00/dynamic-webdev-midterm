import React, {useEffect, useState, useMemo} from 'react';
import axios from "axios";
import quizData from "../containers/Home";
import Data from "../components/Data.json";

function Quiz({numCorrect}) {     //why not work?
  return(
    <div className="imageWrapper">
      <img className="animalImage" src={Data[numCorrect.length].img} alt={Data[numCorrect.length].alt}/>  
    </div>
  )
}

export default Quiz;
