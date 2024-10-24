import { useNavigate } from "react-router-dom";
import Leonardo from "../assets/Leonardo.png";
import { motion } from "framer-motion";
import science from "../assets/Biology.png"; 
import mathIcon from "../assets/math.png"; 
import physicsIcon from "../assets/physics.png"; 

const Banner3 = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // نقل المستخدم إلى صفحة المشاريع مع الفئة المحددة
    navigate(`/projects?category=${category}`);
    window.scrollTo(0, 0); // التمرير لأعلى الصفحة
  };

  return (
    <section className="bg-black">
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={Leonardo}
            alt="Leonardo"
            className="w-[600px] md:max-w-[800px] object-cover drop-shadow"
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold !leading-snug text-white text-center"
            >
              Our Projects In
            </motion.h1>
            <div className="flex gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-2xl hover:bg-gray-700 duration-300 hover:shadow-2xl cursor-pointer"
                onClick={() => handleCategoryClick("Bioinformatics")}
              >
                <img
                  src={science}
                  alt="Bioinformatics Icon"
                  className="icon w-8 h-8 filter brightness-0 invert"
                />
                <p className="text-lg text-white">Bioinformatics</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-2xl hover:bg-gray-700 duration-300 hover:shadow-2xl cursor-pointer"
                onClick={() => handleCategoryClick("Mathematics")}
              >
                <img
                  src={mathIcon}
                  alt="Mathematics Icon"
                  className="icon w-8 h-8 filter brightness-0 invert"
                />
                <p className="text-lg text-white">Mathematics</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-4 p-4 bg-gray-800 rounded-2xl hover:bg-gray-700 duration-300 hover:shadow-2xl cursor-pointer"
                onClick={() => handleCategoryClick("Physics")}
              >
                <img
                  src={physicsIcon}
                  alt="Physics Icon"
                  className="icon w-8 h-8 filter brightness-0 invert"
                />
                <p className="text-lg text-white">Physics</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
