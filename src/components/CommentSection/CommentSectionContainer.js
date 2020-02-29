// You will add code to this file
import React,{useState} from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import "../../dummy-data.js"
const CommentSection = props => {
  // Add state for the comments
  
  return (
    <div>
      {props.comments.map((item) => {
        return <Comment comment = {item}/>
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
