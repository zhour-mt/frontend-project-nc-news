import axios from "axios";

const api = axios.create({
  baseURL: "https://lets-read-zbam.onrender.com/api",
});

const fetchArticles = () => {
  return api.get("/articles").then((response) => {
    return response.data.articles;
  });
};

const fetchArticleById = (article_id) => {
  return api.get(`/articles/${article_id}`).then((response) => {
    return response.data.article[0];
  });
};

const fetchArticleComments = (article_id) => {
  return api.get(`/articles/${article_id}/comments`).then((response) => {
    return response.data.comments;
  });
};

const updatedArticleVotes = (article_id, newVote) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: newVote })
    .then((response) => {
      console.log(response);
      return response;
    })
    .catch((err) => {
      console.log(err);
    });
};

export {
  fetchArticles,
  fetchArticleById,
  fetchArticleComments,
  updatedArticleVotes,
};
