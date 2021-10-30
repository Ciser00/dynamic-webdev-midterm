import React, {useEffect, useState, useMemo} from 'react';
import axios from "axios";
import quizData from "../containers/Home";
import Data from "../components/Data.json";

function Quiz({setNumCorrect}) {     //why not work?
  return(

    <div className="imageWrapper">
      <img className="animalImage" src={Data.AnimalPics[setNumCorrect.length][1]} alt={Data.AnimalPics[setNumCorrect.length][0]}/>

    </div>


  )
}

export default Quiz;
