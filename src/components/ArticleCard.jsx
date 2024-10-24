import { motion } from "framer-motion";

const ArticleCard = ({ article, onClick }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative w-[400px] h-[500px] overflow-hidden rounded-lg shadow-lg group cursor-pointer"
      onClick={onClick}
    >
      <img
        src={article.image}
        alt={article.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3
          className="text-white text-2xl text-center line-clamp-2 max-w-full overflow-hidden break-words"
          dir="rtl"
        >
          {article.title}
        </h3>

        <p
          className="text-white text-base text-center line-clamp-6 max-w-full overflow-hidden break-words"
          dir="rtl"
        >
          {article.description}
        </p>

        <div className="flex flex-col items-center">
          <span className="text-white text-sm bg-blue-500 px-4 py-2 rounded-full mb-2">
            {article.category}
          </span>

          <button
            onClick={() => (window.location.href = article.content)}
            className="px-6 py-2 bg-white text-black font-semibold rounded-full"
          >
            قراءة المقال
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ArticleCard;
