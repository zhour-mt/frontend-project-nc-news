export default function TopicCard({ topic }) {
    return (
      <div>
        <div className="topic-details">
            <p>{topic.description}</p>
        </div>
      </div>
    );
  }
  