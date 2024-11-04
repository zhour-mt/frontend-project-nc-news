export default function ArticleCard({ article }) {
  return (
    <div>
      <div className="article-details">
        <img src={article.article_img_url} />
        <div>
          <p>By: {article.author}</p>
          <p>Topic: {article.topic}</p>
          <p>Date created: {article.created_at}</p>
          <p>Votes: {article.votes}</p>
          <p>Comment count: {article.comment_count}</p>
        </div>
      </div>
    </div>
  );
}
