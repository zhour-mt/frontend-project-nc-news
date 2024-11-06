import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ArticleById from "./components/ArticleById";
import ArticleComments from "./components/ArticleComments";
import Topics from "./components/Topics";
import ArticlesByTopic from "./components/ArticlesByTopic";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:article_id" element={<ArticleById />} />
        <Route
          path="/article/:article_id/comments"
          element={<ArticleComments />}
        />
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:topic_name/articles" element={<ArticlesByTopic />} />
      </Routes>
    </>
  );
}

export default App;
