import classes from "./Post.module.css";
function Post({ author,body }){
    return(
        <>
<div className={classes.bodymain}>
    <p className={classes.author}>{author}</p>
    <p className={classes.work}>{body}</p>
</div>
</>
    )
}
export default Post;