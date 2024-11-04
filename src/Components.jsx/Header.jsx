import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Link to="/">
        <button>Home 🏠</button>
      </Link>
      <Link to="/articles">
        <button>Articles 📰 </button>
      </Link>
      <h1>NC News</h1>
    </div>
  );
}

//👤
