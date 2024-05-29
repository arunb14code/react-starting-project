import classes from "./MainHeader.module.css";
import { MdPostAdd, MdMessage } from "react-icons/md";
function MainHeader({ onCreatePostHandler }) {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.logo}>
          <MdMessage />
          React Poster
        </h1>
        <p>
          <button className={classes.button} onClick={onCreatePostHandler}>
            <MdPostAdd size={18} />
            New Post
          </button>
        </p>
      </header>
    </>
  );
}

export default MainHeader;
