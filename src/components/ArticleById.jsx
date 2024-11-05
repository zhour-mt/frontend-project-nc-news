import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { fetchArticleById, fetchArticles } from "../api";
import ArticleCard from "./ArticleCard";
import ArticleComments from "./ArticleComments";
import VoteAdder from "./VoteAdder";
import CommentAdder from "./CommentAdder";

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
  }, [article_id, setArticle]);

  if (isLoading) {
    return <p>Loading article...</p>;
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
        <p>
          Vote: <VoteAdder article={article} setArticle={setArticle} />
        </p>
        <ArticleComments article={article} />
      </div>
    </>
  );
}
