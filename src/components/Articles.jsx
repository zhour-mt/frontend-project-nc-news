import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { Link } from "react-router-dom";
import ArticleCard from "./ArticleCard";
import ArticleSorter from "./ArticleSorter";
import ErrorHandling from "./ErrorHandling";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [articleSortQuery, setArticleSortQuery] = useState("")

  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticles(articleSortQuery)
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
        setIsLoading(false);
      });
  }, [articleSortQuery]);

  if (isLoading) {
    return <p>Loading articles...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
    {error && <ErrorHandling error={error}/>}
      <h3 className="articles-header">Here are all the available articles:</h3>
      <ArticleSorter setArticleSortQuery={setArticleSortQuery}/>
      <ul>
        {articles.map((article) => (
          <li key={article.article_id} className="article-card">
            <Link to={`/article/${article.article_id}`} article={article}>
              <h3>{article.title}</h3>
            </Link>
            <ArticleCard article={article} key={article.article_id} />
          </li>
        ))}
      </ul>
    </>
  );
}
