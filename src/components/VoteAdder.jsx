import { useEffect, useState } from "react";
import { fetchArticleById, updateArticleVotes } from "../api";

export default function VoteAdder({ article, setArticle }) {
  const [isVotedAdded, setIsVoteAdded] = useState(false);
  const [error, setError] = useState(null);
  const [articleVotes, setArticleVotes] = useState(0);

  const handleClick = (event) => {
    event.currentTarget.disabled = true;

    setArticle((currArticle) => {
      return { ...currArticle, votes: currArticle.votes + 1 };
    });

    updateArticleVotes(article.article_id, 1)
      .then((response) => {
        setArticle({ ...response, comment_count: article.comment_count });
        setIsVoteAdded(true);
      })
      .catch((err) => {
        setError(err);
        setArticle((currArticle) => ({
          ...currArticle,
          votes: currArticle.votes - 1,
        }));
        console.log(err);
      });
  };

  if (error) {
    return <p>Error adding your vote, please try again</p>;
  }

  return (
    <>
      <button className="like-button" onClick={handleClick}>
        <img
          src="https://img.freepik.com/free-vector/like-button-thumbs-up-cartoon-style_78370-1159.jpg"
          className="like-image"
        ></img>
      </button>
    </>
  );
}

// optimistic rendering
// button to disable
