import { useEffect, useState } from "react";
import { fetchTopics } from "../api";
import TopicCard from "./TopicCard";
import { Link } from "react-router-dom";

export default function Topics() {
  // get topics
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchTopics().then((topicsData) => {
      setTopics(topicsData);
    });
  }, []);

  return (
    <>
      <h3 className="topics-header">Here are all the available topics:</h3>
      <ol>
        {topics.map((topic) => (
          <li key={topic.slug} className="topic-card">
            <Link to={`/topics/${topic.slug}/articles`} state= {topic }>
              <h3>{topic.slug}</h3>
            </Link>
            <TopicCard topic={topic} />
          </li>
        ))}
      </ol>
    </>
  );
}

//link each topic to a new page with a list of the articles by topic
//
