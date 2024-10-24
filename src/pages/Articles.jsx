import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database"; // استيراد Realtime Database
import app from "../../firebaseConfig"; // تأكد من أن هذا الملف يقوم بتهيئة Firebase
import ArticleCard from "../components/ArticleCard";
import Filter from "../components/Filter";
import { useLocation } from "react-router-dom";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); // تم تعديل المتغير هنا
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [error, setError] = useState(null);
  const [filteredArticles, setFilteredArticles] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const db = getDatabase(); // تهيئة قاعدة البيانات
    const articlesRef = ref(db, "articles"); // مرجع إلى مجموعة المقالات

    const fetchArticles = () => {
      onValue(
        articlesRef,
        (snapshot) => {
          const fetchedArticles = snapshot.val();
          if (fetchedArticles) {
            const articlesList = Object.entries(fetchedArticles).map(
              ([id, data]) => ({
                id,
                ...data,
              })
            );

            console.log("Fetched Articles:", articlesList); // تأكد من عرض المقالات هنا

            setArticles(articlesList);
            setFilteredArticles(articlesList);
          } else {
            setArticles([]);
          }
          setLoading(false);
        },
        (error) => {
          setError(error);
          console.log("Error fetching articles:", error); // عرض الخطأ في console
          setLoading(false);
        }
      );
    };

    fetchArticles();
  }, []);

  // استخراج الفئات من المقالات
  const categories = [...new Set(articles.map((article) => article.category))];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      handleFilterChange(category);
    } else {
      setFilteredArticles(articles);
    }
  }, [location.search, articles]);

  // دالة لتغيير الفلتر
  const handleFilterChange = (selectedCategory) => {
    if (selectedCategory) {
      const tempArticles = articles.filter(
        (article) => article.category === selectedCategory
      );
      setFilteredArticles(tempArticles);
    } else {
      setFilteredArticles(articles);
    }
  };

  // دالة لاختيار مقال
  const handleArticleSelect = (article) => {
    setSelectedArticle(article);
  };

  return (
    <div className="bg-black flex flex-col items-center p-6">
      <Filter
        categories={categories}
        onFilterChange={handleFilterChange}
        selectedCategory={new URLSearchParams(location.search).get("category")}
      />

      {loading ? (
        <div>جاري تحميل المقالات...</div> // تم تعديل النص
      ) : filteredArticles.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div>لا توجد مقالات لعرضها.</div>
      )}
    </div>
  );
};

export default Articles;
