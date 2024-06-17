import Post from "./Post.jsx";
import NewPost from "../routes/NewPost.jsx";
import Modal from "./Modal.jsx";
import classes from "./PostList.module.css";
import { useState } from "react";

function PostList({isPosting, onStopPosting}) {
  const [posts, setPosts]= useState([]);
  
// let modalContent;
// if(modalContent){
//  modalContent=(<Modal onClose={visiblehidehandler}>
//           <NewPost
//             onChangedkam={changeBodyHandler}
//             onChangenaam={changenamehandler}
//           />
//         </Modal>);
// }
 
function addPostHandler(postData){
  // fetch('https://localhost:8080/posts', {
  //   method: 'POST',
  //   body: JSON.stringify(postData),
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // });
setPosts((existingPosts) => [postData, ...existingPosts]);
}
  return (
    <>
    {/* {modalContent} */}
      {isPosting ? (
        <Modal onClose={onStopPosting}>
          <NewPost
            // onChangedkam={changeBodyHandler}
            // onChangenaam={changenamehandler}
            onCancel={onStopPosting} onAddPost={addPostHandler}
          />
        </Modal>
      ) : null}
      {posts.length >0 && (
      <div className={classes.posts}>
       {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} /> ) }
      </div>
      )}
      {posts.length==0 && (
        <div style={{textAlign: 'center' ,color: 'white'}}>
          <h2>There are no posts yet</h2>
          <p>Start adding</p>
        </div>
      )}
    </>
  );
}
export default PostList;
