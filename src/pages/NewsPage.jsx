import { useParams } from 'react-router-dom';
import newsData from '../data/newsData';
import NewsList from '../components/NewsList';

const NewsPage = () => {
  const { topic } = useParams();
  const articles = newsData[topic] || [];

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">
        Berita {topic.charAt(0).toUpperCase() + topic.slice(1)}
      </h1>
      <NewsList articles={articles} />
    </div>
  );
};

export default NewsPage;
