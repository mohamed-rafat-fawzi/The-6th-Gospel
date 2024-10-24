import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom"; // إضافة useLocation
import Logo from "../assets/Logo.png";

const NavbarMenu = [
  {
    id: 2,
    title: "Articles",
    link: "/articles",
  },
  {
    id: 3,
    title: "Books",
    link: "/books",
  },
  {
    id: 4,
    title: "Projects",
    link: "/projects",
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة تتبع القائمة الجانبية
  const location = useLocation(); // الحصول على مسار الصفحة الحالية

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // تبديل الحالة عند النقر
  };

  // تحديد إذا كانت الصفحة هي الهوم
  const isHomePage = location.pathname === "/";

  return (
    <nav className={`relative z-20 ${isHomePage ? '' : 'bg-black'}`}> {/* إضافة bg-black فقط إذا لم تكن في الصفحة الرئيسية */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="container py-10 flex justify-between items-center"
      >
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <motion.img
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
              src={Logo}
              alt="Logo"
              className="w-16 h-auto"
            />
            <span className="ml-2 text-5xl font-bold text-white">OSPEL</span>
          </Link>
        </div>

        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  className="inline-block py-2 px-3 text-white hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden"></div>
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:hidden">
          <IoMdMenu
            className="text-4xl text-white cursor-pointer"
            onClick={toggleMenu} // عند النقر على أيقونة القائمة
          />
        </div>
      </motion.div>

      {/* القائمة الجانبية للشاشات الصغيرة */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-50 text-white lg:hidden">
          <ul className="flex flex-col items-center gap-3 p-4">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={menu.link}
                  className="inline-block py-2 px-3"
                  onClick={toggleMenu} // إغلاق القائمة عند النقر على رابط
                >
                  {menu.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
