import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

const NewsList = ({ articles }) => {
  return (
    <div>
      {articles.length > 0 ? (
        articles.map((article, index) => (
          <NewsItem key={index} article={article} />
        ))
      ) : (
        <p className="text-gray-500 text-center">Tidak ada berita tersedia.</p>
      )}
    </div>
  );
};

// ✅ Tambahkan validasi prop types
NewsList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default NewsList;
