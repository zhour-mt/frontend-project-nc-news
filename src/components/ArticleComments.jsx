import { useEffect, useState } from "react";
import { fetchArticleComments } from "../api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import CommentAdder from "./CommentAdder";

export default function ArticleComments({ article }) {
  const [articleComments, setArticleComments] = useState([]);
  const { article_id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticleComments(article_id).then((articleCommentsData) => {
      setArticleComments(articleCommentsData);
      setIsLoading(false);
    }).catch((err) => {
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
      <ul>
        {articleComments.map((comment) => (
          <li key={comment.comment_id} className="comment-card">
            <CommentCard comment={comment} />
          </li>
        ))}
      </ul>
    </div>
  );
}
