import { useState } from "react";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
function NewPost({ onCancel,onAddPost }) {
  const [Enteredvalue, setEnteredvalue] = useState("");
  const [Enteredname, setEnteredname] = useState("");
  function changeBodyHandler(event) {
    setEnteredvalue(event.target.value);
  }
  function changenamehandler(event) {
    setEnteredname(event.target.value);
  }
  function submithandler(event) {
    event.preventDefault();
    const postData = {
      body: Enteredvalue,
      author: Enteredname,
    };
    onAddPost(postData);
    
    onCancel();
  }
  return (
    // <Modal>
    <form className={classes.NewPost} onSubmit={submithandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={4} onChange={changeBodyHandler} />
      </p>
      <p>
        <label htmlFor="body">Your name</label>
        <textarea id="name" required onChange={changenamehandler}></textarea>
      </p>
      <p className={classes.action}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Submit</button>
      </p>
    </form>
    // </Modal>
  );
}
export default NewPost;
