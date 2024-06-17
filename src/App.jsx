import PostList from "./components/PostList.jsx";
import MainHeader from "./components/MainHeader.jsx";
import { useState } from "react";
function App() {
  const [modalIsVisible, setModalisVisible] = useState(false);

  function showModalHandler() {
    setModalisVisible(true);
  }
  function hideModalHandler() {
    setModalisVisible(false);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}
export default App;
