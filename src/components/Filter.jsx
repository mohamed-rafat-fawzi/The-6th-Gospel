import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Filter = ({ categories, onFilterChange, selectedCategory }) => {
  const [selectedFilter, setSelectedFilter] = useState(selectedCategory);

  const handleFilterButtonClick = (category) => {
    const newFilter = selectedFilter === category ? null : category;
    setSelectedFilter(newFilter);
  };

  const handleShowAll = () => {
    setSelectedFilter(null);
  };

  useEffect(() => {
    onFilterChange(selectedFilter);
  }, [selectedFilter, onFilterChange]);

  useEffect(() => {
    setSelectedFilter(selectedCategory);
  }, [selectedCategory]);

  const SlideLeft = (delay) => {
    return {
      initial: {
        opacity: 0,
        x: 50,
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.1,
          delay: delay,
          ease: "easeInOut",
        },
      },
    };
  };

  return (
    <div className="mb-4 flex justify-center gap-4">
      <motion.button
        onClick={handleShowAll}
        variants={SlideLeft(0.1)}
        initial="initial"
        animate="animate"
        className={`bg-[#1a1a1a] text-white rounded-2xl p-4 hover:bg-gray-800 duration-300 shadow-md ${
          selectedFilter === null ? "bg-gray-800" : ""
        }`}
      >
        All
      </motion.button>

      {categories.map((category, idx) => (
        <motion.button
          onClick={() => handleFilterButtonClick(category)}
          key={`filter-${idx}`}
          variants={SlideLeft(0.1 + idx * 0.1)}
          initial="initial"
          animate="animate"
          className={`bg-[#1a1a1a] text-white rounded-2xl p-4 hover:bg-gray-800 duration-300 shadow-md ${
            selectedFilter === category ? "bg-gray-800" : ""
          }`}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default Filter;
