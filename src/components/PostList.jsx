import Modal from "./Modal";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import React, { useEffect, useState } from "react";
function PostList({ isPosting, hideModalHandler }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    setPosts((prevPosts) => {
      return [postData, ...prevPosts];
    });
  }

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
      setIsLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <>
      {isPosting && (
        <Modal onClickHandler={hideModalHandler}>
          <NewPost onCancel={hideModalHandler} onAddPost={addPostHandler} />
        </Modal>
      )}
      {!isLoading && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {!isLoading && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isLoading && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>Loading posts...</h2>
        </div>
      )}
    </>
  );
}

export default PostList;
