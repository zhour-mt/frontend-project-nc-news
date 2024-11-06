import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchArticleById } from "../api";
import ArticleCard from "./ArticleCard";
import ArticleComments from "./ArticleComments";
import VoteAdder from "./VoteAdder";
import ErrorHandling from "./ErrorHandling";

export default function ArticleById() {
  const [article, setArticle] = useState({});

  const { article_id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticleById(article_id)
      .then((articleData) => {
        setArticle(articleData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.response);
        setIsLoading(false);
      });
  }, [article_id, setArticle]);

  if (isLoading) {
    return <p>Loading article...</p>;
  }
 
  return (
    <>
      {error ? (
        <ErrorHandling error={error} />
      ) : (
        <div className="article-card">
          <h3>{article.title}</h3>
          <ArticleCard article={article} key={article.article_id} />
          <p className="article-body">{article.body}</p>
          <p>
            Vote: <VoteAdder article={article} setArticle={setArticle} />
          </p>
          <ArticleComments article={article} />
        </div>
      )}
    </>
  );
}
