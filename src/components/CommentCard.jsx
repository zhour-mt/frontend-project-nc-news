
export default function CommentCard({comment}) {
    return (
        <div>
          <div className="comment-details">
            <div>
              <h3>{comment.author}</h3>
              <p>{comment.body}</p>
              <p>Date created: {comment.created_at}</p>
              <p>Votes: {comment.votes}</p>
            </div>
          </div>
        </div>
      );

}