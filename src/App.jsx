import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Books from "./pages/Books";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation(); 
  const isHomePage = location.pathname === "/"; 

  return (
    <div>
      {!isHomePage && <Header />} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/books" element={<Books />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
