import PropTypes from 'prop-types';

const NewsItem = ({ article }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-md bg-white">
      {/* Category and Date Section */}
      <div className="px-4 pt-4 flex items-center space-x-2">
        <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-0.5 rounded">
          {article.category}
        </span>
        <span className="text-gray-500 text-xs">{article.date}</span>
      </div>

      {/* Main Content Section */}
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{article.title}</h2>
        <p className="text-gray-700 text-sm mb-3">{article.description}</p>
      </div>

      {/* Image Section */}
      {article.urlToImage && (
        <div className="w-full h-52">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

NewsItem.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string,
    category: PropTypes.string,
    date: PropTypes.string,
  }).isRequired,
};

export default NewsItem;
