import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles()
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading articles...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h3 className="articles-header">Here are all the available articles:</h3>
      <ol>
        {articles.map((article) => (
          <div className="article-card">
            <Link to={`/article/${article.article_id}`} article={article}>
              <h3>{article.title}</h3>
            </Link>
            <ArticleCard article={article} key={article.article_id} />
          </div>
        ))}
      </ol>
    </>
  );
}
