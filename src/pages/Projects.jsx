import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // للحصول على مسار الصفحة
import { getDatabase, ref, onValue } from "firebase/database"; // استيراد الوظائف من Firebase
import ProjectCard from "../components/ProjectCard";
import Filter from "../components/Filter";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const location = useLocation(); // للحصول على مسار الصفحة

  useEffect(() => {
    const db = getDatabase(); // تهيئة قاعدة بيانات Firebase
    const projectsRef = ref(db, 'projects'); // الإشارة إلى مجموعة المشاريع

    // الاشتراك في القيم من قاعدة البيانات
    onValue(projectsRef, (snapshot) => {
      const data = snapshot.val(); // الحصول على البيانات
      const fetchedProjects = [];

      for (let id in data) {
        fetchedProjects.push({ id, ...data[id] }); // إضافة كل مشروع إلى المصفوفة
      }

      console.log("Fetched Projects:", fetchedProjects);
      setProjects(fetchedProjects);
      setFilteredProjects(fetchedProjects);
      setCategories([...new Set(fetchedProjects.map((project) => project.category))]);
      setLoading(false);
    }, (error) => {
      console.error("Error fetching projects:", error);
      setLoading(false);
    });
  }, []);

  // استخدام الفئة من عنوان URL لتصفية المشاريع
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get("category");
    if (category) {
      handleFilterChange(category);
    } else {
      setFilteredProjects(projects);
    }
  }, [location.search, projects]);

  // تحديث المشاريع المصفاة عند تغيير الفلتر
  const handleFilterChange = (selectedCategory) => {
    if (selectedCategory) {
      const tempProjects = projects.filter((project) => project.category === selectedCategory);
      setFilteredProjects(tempProjects);
    } else {
      setFilteredProjects(projects);
    }
  };

  return (
    <div className="bg-black flex flex-col items-center p-6">
      <Filter
        categories={categories}
        onFilterChange={handleFilterChange}
        selectedCategory={new URLSearchParams(location.search).get('category')}
      />

      {loading ? (
        <div>جاري تحميل المشاريع...</div>
      ) : filteredProjects.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div>لا توجد مشاريع لعرضها.</div>
      )}
    </div>
  );
}

export default Projects;
