import { motion } from "framer-motion";

const BookCard = ({ book }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative w-[400px] h-[500px] overflow-hidden rounded-lg shadow-lg group cursor-pointer"
    >
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />

      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-between p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3
          className="text-white text-2xl text-center line-clamp-2 max-w-full overflow-hidden break-words"
          dir="rtl"
        >
          {book.title}
        </h3>

        <p
          className="text-white text-base text-center line-clamp-6 max-w-full overflow-hidden break-words"
          dir="rtl"
        >
          {book.description}
        </p>

        <div className="flex flex-col items-center">
          <span className="text-white text-sm bg-green-500 px-4 py-2 rounded-full mb-4">
            {book.author}
          </span>
          <span className="text-white text-sm bg-blue-500 px-4 py-2 rounded-full mb-4">
            {book.category}
          </span>
          <button
            className="px-6 py-2 bg-white text-black font-semibold rounded-full"
            onClick={() => (window.location.href = book.download)}
          >
            Download Book
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BookCard;
