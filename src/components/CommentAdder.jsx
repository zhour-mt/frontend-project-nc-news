import { useEffect, useState } from "react";
import { fetchArticleComments, postComment } from "../api";

export default function CommentAdder({
  article,
  articleComments,
  setArticleComments,
}) {
  const [comment, setComment] = useState({ author: "jessjelly", body: "" });
  const [isCommentPosted, setIsCommentPosted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    const type = event.target.id
    const input = event.target.value
    setComment({...comment, [type]: input})
    
  }

  const handleSubmit= (event) => {
    event.preventDefault()
    postComment(article.article_id, comment)
    setIsCommentPosted(true)
    setComment({ author: "jessjelly", body: "" })
    setArticleComments([...articleComments, comment])
  }
  
  return (
    <>
      <form>
        <label>Add comment </label>
        <input
          type="text"
          id="body"
          onChange={handleChange}
          value={comment.body}
        ></input>
        <button onClick={handleSubmit} disabled={!comment.body}>Post comment</button>
        {isCommentPosted && <p>Comment posted!</p>}
      </form>
    </>
  );
}


