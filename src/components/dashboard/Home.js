import React, { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

import "./home.css";
import Header from "./Header";
import QuestionAnswerContainer from "../question-answer/QuestionAnswerContainer";
import { getParsedQuetionAnswer, getQuetionAnswerGroupByCategory } from "../../utils/helper";

const palceholderForSearch =`type the questions`;

const Home = () => {

  const [quetionAnswer, setQuetionAnswer] = useState({});
  const [questionAnswerGroupByCategory, setQuestionAnswerGroupByCategory] = useState({});


  useEffect(() => {
    const parsedQuetionAnswer = getParsedQuetionAnswer();
    const questionAnsweritemGroupByCategory = getQuetionAnswerGroupByCategory(parsedQuetionAnswer);
    setQuetionAnswer(parsedQuetionAnswer);
    setQuestionAnswerGroupByCategory(questionAnsweritemGroupByCategory);

  }, [])
  return (
    <>
      <Header />
      <div className="home-container">

        {/* search-bar */}
        <div className="search-bar-container">
          <span className="search-icon-container">
            <SearchIcon />
          </span>
          <input className="search-bar-input-field" placeholder={palceholderForSearch}/>

          <span className="search-icon-container">
            <ClearIcon />
          </span>
        </div>

        {/* question-answer section */}
        <QuestionAnswerContainer questionAnswerItems = {questionAnswerGroupByCategory} />
      </div>
    </>
  );
};

export default Home;
