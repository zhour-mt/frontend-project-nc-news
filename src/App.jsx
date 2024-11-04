import { Route, Routes } from "react-router-dom";
import Articles from "./Components.jsx/Articles";
import Header from "./Components.jsx/Header";
import Home from "./Components.jsx/Home";
import Nav from "./Components.jsx/Nav";

function App() {
  return (
    <>
      <Header />
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
