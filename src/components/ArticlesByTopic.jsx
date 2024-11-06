import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { Link, useLocation } from "react-router-dom";
import ArticleCard from "./ArticleCard";

export default function ArticlesByTopic() {
  const topic = useLocation().state;

  const [articlesByTopic, setArticlesByTopic] = useState([]);

  useEffect(() => {
    fetchArticles().then((allArticles) => {
      const topicArticles = allArticles.filter(
        (article) => article.topic === topic.slug
      );
      setArticlesByTopic(topicArticles);
    });
  }, []);

  return (
    <>
      <h3 className="articles-header">Here are all the available articles:</h3>
      <ul>
        {articlesByTopic.map((article) => (
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
