import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchArticleById, fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";

export default function ArticleById() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticleById(article_id)
      .then((response) => {
        setArticle(response);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }),
    [article_id];

  if (isLoading) {
    return <p>Loading articles...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <div className="article-card">
        <h3>{article.title}</h3>
        <ArticleCard article={article} key={article.article_id} />
        <p className="article-body">{article.body}</p>
      </div>
    </>
  );
}
