export default function ArticleCard({ article }) {
  return (
    <div>
      <h3>{article.title}</h3>
      <div className="article-details">
        <img src={article.article_img_url} />
        <div>
          <h4>By: {article.author}</h4>
          <h4>Topic: {article.topic}</h4>
        </div>
      </div>
    </div>
  );
}