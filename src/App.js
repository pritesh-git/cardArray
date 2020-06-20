import React from 'react';
import './App.css';
import fillVal from './fillVal.json'
import 'bootstrap/dist/css/bootstrap.css';
import { IoIosThumbsUp,IoIosText,IoIosSend } from "react-icons/io";
function App() {
  return (
<div class="row row-cols-1 row-cols-md-4 m-3" style={{border:"1px red dotted"}}>
    {
      fillVal.fills.map((val) => (
      <div class="card mb-3 m-4 p-2">
      <img class="card-img-top h-50" src={val.Num} alt="Click to load" />
      <div class="card-body">

        <h3 class="card-title">{val.Name}</h3>
        <p class="card-text"><span class="badge badge-info">{val.Post}</span></p>
        <p class="d-flex justify-content-between">
          <button class="btn btn-link"><IoIosThumbsUp/> {val.Like} Likes</button>
          <button class="btn btn-link"><IoIosText/> {val.Comment} Comment</button>
          <button class="btn btn-link"><IoIosSend/> {val.Share} Share</button>
        </p>
      </div>
    </div>
      ))
    }

  </div>  
  );
}

export default App;
