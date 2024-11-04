import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { fetchArticleById, fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";
import ArticleComments from "./ArticleComments";

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
    <>
      <div className="article-card">
        <h3>{article.title}</h3>
        <ArticleCard article={article} key={article.article_id} />
        <p className="article-body">{article.body}</p>
        <Link to={`/article/${article.article_id}/comments`} article={article}>
          <ArticleComments article={article} />
          <button>View Article Comments (0)</button>
        </Link>
        <button className="like-button">
          <img
            src="https://img.freepik.com/free-vector/like-button-thumbs-up-cartoon-style_78370-1159.jpg"
            className="like-image"
          ></img>
        </button>
      </div>
    </>
  );
}
