import Header from "../components/Header";
import Blob from "../assets/background.jpg";
import { motion } from "framer-motion";

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const Hero = () => {
  return (
    <section className="bg-light overflow-hidden relative">
      <div className="relative min-h-[650px]">
        <div className="absolute inset-0 w-full h-full">
          <motion.img
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            src={Blob}
            alt="Background Blob"
            className="w-full h-full object-cover" // تأكيد تغطية الصورة لكامل العنصر
          />
        </div>
        <Header className="absolute top-0 left-0 w-full z-10" /> {/* الهيدر فوق الصورة */}
      </div>
    </section>
  );
};


export default Hero;
