import PostList from "./components/PostList";
import MainHeader from "./components/MainHeader";
import { useState } from "react";
function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  function toggleModalHandler() {
    setModalIsVisible((prevState) => !prevState);
  }
  return (
    <>
      <MainHeader onCreatePostHandler={toggleModalHandler} />
      <main>
        <PostList
          isPosting={modalIsVisible}
          hideModalHandler={toggleModalHandler}
        />
      </main>
    </>
  );
}

export default App;
