import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticles()
      .then((articlesData) => {
        setArticles(articlesData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <p>Loading articles...</p>;
  }
  return (
    <>
      <h3 className="articles-header">Here are all the available articles:</h3>
      <ol>
        {articles.map((article) => (
          <div className="article-card">
            <ArticleCard article={article} key={article.article_id} />
          </div>
        ))}
      </ol>
    </>
  );
}
