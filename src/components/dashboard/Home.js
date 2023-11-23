import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

import "./home.css";
import Header from "./Header";
import QuestionAnswerContainer from "../question-answer/QuestionAnswerContainer";

const palceholderForSearch =`type the questions`;

const Home = () => {
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
        <QuestionAnswerContainer questionAnswerList = {[1]}/>
      </div>
    </>
  );
};

export default Home;
