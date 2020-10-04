import React, { useEffect, useState } from "react";
import MessageSender from "../MessageSender/MessageSender";
import Post from "../Post/Post";
import StoryReel from "../StoryReel/StoryReel";
import "./Feed.css";
import { auth, db } from "../../firebase";
import { useHistory } from "react-router-dom";

function Feed({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, [posts]);

  const history = useHistory();
  const signOut = (e) => {
    e.preventDefault();
    auth.signOut();
    history.push("/login");
  };
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender user={user} />

      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          username={post.data.username}
          timestamp={post.data.timestamp}
          caption={post.data.caption}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
