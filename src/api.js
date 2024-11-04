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
    return response.data.article[0]
  })
}

export { fetchArticles, fetchArticleById };
