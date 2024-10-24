import { SlChemistry } from "react-icons/sl";
import { RiComputerLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Math from "../assets/Math.png"; 
import Physics from "../assets/Physics.png"; 
import Philosophy from "../assets/Philosophy.png"; 
import Biology from "../assets/Biology.png"; 
import { useNavigate } from "react-router-dom";

const ServicesData = [
  {
    id: 1,
    title: "Mathematics",
    category: "Mathematics",
    icon: <img src={Math} alt="Mathematics Icon" className="icon w-8 h-8 filter brightness-0 invert" />,
    delay: 0.2,
  },
  {
    id: 2,
    title: "Physics",
    category: "Physics",
    icon: <img src={Physics} alt="Physics Icon" className="icon w-8 h-8 filter brightness-0 invert" />,
    delay: 0.3,
  },
  {
    id: 3,
    title: "Chemistry",
    category: "Chemistry",
    icon: <SlChemistry className="w-8 h-8 text-white" />,
    delay: 0.4,
  },
  {
    id: 4,
    title: "Biology",
    category: "Biology",
    icon: <img src={Biology} alt="Biology Icon" className="icon w-8 h-8 filter brightness-0 invert" />,
    delay: 0.5,
  },
  {
    id: 5,
    title: "Philosophy",
    category: "Philosophy",
    icon: <img src={Philosophy} alt="Philosophy Icon" className="icon w-8 h-8 filter brightness-0 invert" />,
    delay: 0.6,
  },
  {
    id: 6,
    title: "Computer Science",
    category: "Computer Science",
    icon: <RiComputerLine className="w-8 h-8 text-white" />,
    delay: 0.7,
  },
];

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
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Banner2 = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    // نقل المستخدم إلى صفحة المقالات مع الفئة المحددة
    navigate(`/articles?category=${category}`);
    window.scrollTo(0, 0); // التمرير لأعلى الصفحة
  };

  return (
    <section className="bg-black">
      <div className="container pb-14 pt-16">
        <h1 className="text-4xl font-bold text-white text-center pb-10">
          Articles We Provide
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {ServicesData.map((service) => (
            <motion.div
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: false, amount: 0.5 }}
              className="bg-[#1a1a1a] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-gray-800 hover:scale-110 duration-300 hover:shadow-2xl"
              onClick={() => handleCategoryClick(service.category)}
            >
              <div className="text-4xl mb-4 text-white">
                {service.icon}
              </div>
              <h1 className="text-lg font-semibold text-white text-center px-3">
                {service.title}
              </h1>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner2;
