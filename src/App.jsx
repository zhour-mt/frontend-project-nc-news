import { Route, Routes } from "react-router-dom";
import Articles from "./components/Articles";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ArticleById from "./components/ArticleById";
import ArticleComments from "./components/ArticleComments";
import VoteAdder from "./components/VoteAdder";

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
      </Routes>
    </>
  );
}

export default App;
