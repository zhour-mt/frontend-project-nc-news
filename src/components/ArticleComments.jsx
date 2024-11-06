import { useEffect, useState } from "react";
import { fetchArticleComments } from "../api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";
import CommentDeleter from "./CommentDeleter";

export default function ArticleComments({ article }) {
  const [articleComments, setArticleComments] = useState([]);
  const { article_id } = useParams();

  const [isCommentDeleted, setIsCommentDeleted] = useState(false);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticleComments(article_id)
      .then((articleCommentsData) => {
        setArticleComments(articleCommentsData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [article_id]);

  if (isLoading) {
    return <p>Loading articles...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <CommentAdder
        article={article}
        articleComments={articleComments}
        setArticleComments={setArticleComments}
      />
      {isCommentDeleted && <p>Comment deleted!</p>}
      <ul>
        {articleComments.map((comment) => (
          <li key={comment.comment_id} className="comment-card">
            <>
              <CommentCard comment={comment} />
              <CommentDeleter
                comment={comment}
                articleComments={articleComments}
                setArticleComments={setArticleComments}
                isCommentDeleted={isCommentDeleted}
                setIsCommentDeleted={setIsCommentDeleted}
              />
            </>
          </li>
        ))}
      </ul>
    </div>
  );
}
