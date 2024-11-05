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

const updateArticleVotes = (article_id, newVote) => {
  return api
    .patch(`/articles/${article_id}`, { inc_votes: newVote })
    .then((response) => {
      return response;
    })
};

const postComment = (article_id, newComment) => {
  return api.post(`/articles/${article_id}/comments`, newComment).then((response) => {
    console.log(response)
    console.log("comment posted")
    return response.data.comment
  })
}



export {
  fetchArticles,
  fetchArticleById,
  fetchArticleComments,
  updateArticleVotes,
  postComment
};
