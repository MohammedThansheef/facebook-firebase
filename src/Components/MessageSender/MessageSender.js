import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { db } from "../../firebase";
import firebase from "firebase";

function MessageSender({ user }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      username: user.email,
      caption: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQGF5Tw7u6Rhng/profile-displayphoto-shrink_200_200/0?e=1606953600&v=beta&t=hlW9Kpx4-ubWDRvOUXo-0gPxam0-O99x377-Qfr8tr4" />
        <form>
          <input
            className="messageSender__input"
            type="text"
            placeholder="Whats on your mind, Thansef?"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div>
      <hr />
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon fontSize="large" style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon fontSize="large" style={{ color: "#41B35D" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <EmojiEmotionsIcon fontSize="large" style={{ color: "#EAB026" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
