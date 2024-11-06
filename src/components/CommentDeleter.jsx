import { useState } from "react";
import { deleteComment } from "../api";
import ArticleComments from "./ArticleComments";

export default function CommentDeleter({
  comment,
  articleComments,
  setArticleComments,
  isCommentDeleted,
  setIsCommentDeleted,
}) {
  const [commentAuthor, setCommentAuthor] = useState("jessjelly");

  const handleClick = (event) => {
    let id = comment.comment_id;
    event.currentTarget.disabled = true;

    const updatedArticleComments = articleComments.filter(
      (comment) => comment.comment_id !== id
    );
    setIsCommentDeleted(true)

    setArticleComments(updatedArticleComments);
    deleteComment(comment.comment_id);
    
  };


  return (
    <>
      {commentAuthor === comment.author && (
        <button onClick={handleClick}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/8997/8997755.png"
            className="delete-image"
            alt="Delete icon"
          />
        </button>
      )}
    </>
  );
}
