import { useEffect, useState } from "react";
import { fetchArticleComments } from "../api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

export default function ArticleComments() {
  const [articleComments, setArticleComments] = useState([]);
  const { article_id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticleComments(article_id).then((articleCommentsData) => {
      setArticleComments(articleCommentsData);
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
      <ol>
        {articleComments.map((comment) => (
          <div className="comment-card">
            <CommentCard comment={comment} />
          </div>
        ))}
      </ol>
    </div>
  );
}
