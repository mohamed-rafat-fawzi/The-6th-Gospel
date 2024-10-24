import { motion } from "framer-motion";
import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsFacebook, BsGithub, BsYoutube, BsTwitter } from "react-icons/bs";
import Logo from "../assets/Logo.png";

const CustomFooter = () => {
  return (
    <footer className="py-28 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="container"
      >
        <div className="flex flex-col items-center text-white">
          <div className="flex items-center">
            <motion.img
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
              src={Logo}
              alt="Logo"
              className="w-16 h-auto" // Adjusted width to a smaller size
            />
            <span className="ml-2 text-5xl font-bold">OSPEL</span>{" "}
            {/* Added the text "OSPEL" */}
          </div>{" "}
          <p className="text-5xl font-bold">The 6th Gospel</p>
        </div>

        <FlowbiteFooter.Divider className="my-6" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Copyright href="/" by=" Mohamed Rafat" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FlowbiteFooter.Icon
              href="https://www.youtube.com/@the-6th-gospel"
              icon={BsYoutube}
              className="text-white hover:text-secondary duration-200"
            />
            <FlowbiteFooter.Icon
              href="https://www.facebook.com/profile.php?id=61561414414883"
              icon={BsFacebook}
              className="text-white hover:text-secondary duration-200"
            />
            <FlowbiteFooter.Icon
              href="https://x.com/morafat2000"
              icon={BsTwitter}
              className="text-white hover:text-secondary duration-200"
            />
            <FlowbiteFooter.Icon
              href="https://github.com/mohamed-rafat-fawzi"
              icon={BsGithub}
              className="text-white hover:text-secondary duration-200"
            />
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default CustomFooter;
