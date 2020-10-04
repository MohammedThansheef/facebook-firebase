import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Post.css";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import NearMeIcon from "@material-ui/icons/NearMe";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

function Post({ profilePic, username, timestamp, caption, image }) {
  const [comment, setComment] = useState("");

  const postComment = (e) => {
    e.preventDefault();
    setComment("");
  };
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" src={profilePic} />
        <div className="post__headerInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      <h4>{caption}</h4>
      <img src={image} alt="" />
      <div className="post__bottom">
        <div className="post__options">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__options">
          <ChatBubbleOutlineOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__options">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__options">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>

      <div className="post__comments">
        <Avatar />
        <form>
          <input
            className="post__input"
            type="text"
            placeholder="Write a Comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button className="post__button" onClick={postComment}>
            Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default Post;
