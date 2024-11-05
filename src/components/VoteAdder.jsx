import { useEffect, useState } from "react";
import { updatedArticleVotes } from "../api";

export default function VoteAdder({ article, setArticle }) {
  const [hasVoted, setHasVoted] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = () => {
    if (!hasVoted) {
      setHasVoted(true);
      updatedArticleVotes(article.article_id, 1)
        .then(() => {
          const updatedArticle = { ...article, votes: article.votes + 1 };
          setArticle(updatedArticle);
          localStorage.setItem(
            `article_${article.article_id}`,
            JSON.stringify(updatedArticle)
          );
        })
        .catch((err) => {
          setHasVoted(false);
          setError(err);
          console.log(err);
        });
    }
  };

  useEffect(() => {
    const storedArticle = JSON.parse(
      localStorage.getItem(`article_${article.article_id}`)
    );
    console.log(storedArticle);
    if (storedArticle) {
      setArticle(storedArticle);
    }
  }, [article.article_id]);

  if (error) {
    return <p>Error adding your vote, please try again</p>;
  }

  return (
    <button className="like-button" onClick={handleClick}>
      <img
        src="https://img.freepik.com/free-vector/like-button-thumbs-up-cartoon-style_78370-1159.jpg"
        className="like-image"
      ></img>
    </button>
  );
}
