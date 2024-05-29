import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ onCancel, onAddPost }) {
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");

  function bodyChangeHandler(event) {
    setBody(event.target.value);
  }
  function authorChangeHandler(event) {
    setAuthor(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      body,
      author,
    };
    console.log(postData);
    onAddPost(postData);
    onCancel();
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Body</label>
        <textarea required rows={3} id="body" onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="author">Author</label>
        <input type="text" id="author" onChange={authorChangeHandler} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Post</button>
      </p>
    </form>
  );
}
export default NewPost;
