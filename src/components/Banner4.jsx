import BgImage from "../assets/book.png";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Banner4 = () => {
  return (
    <section className="bg-black">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-6 lg:max-w-[430px] mx-auto">
            <h1 className="text-2xl font-bold text-white !leading-snug">
              You can download numerous books across various scientific fields.
            </h1>

            <a
              href="/books"
              className="primary-btn !mt-8 inline-flex items-center gap-4 group"
            >
              Download Now
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner4;
