import { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database"; // استيراد وظائف Firebase
import BookCard from "../components/BookCard";
import Filter from "../components/Filter";

function Books() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const db = getDatabase(); // تهيئة قاعدة بيانات Firebase
    const booksRef = ref(db, 'books'); // الإشارة إلى مجموعة الكتب

    // الاشتراك في القيم من قاعدة البيانات
    onValue(booksRef, (snapshot) => {
      const data = snapshot.val(); // الحصول على البيانات
      const fetchedBooks = [];

      for (let id in data) {
        fetchedBooks.push({ id, ...data[id] }); // إضافة كل كتاب إلى المصفوفة
      }

      console.log("Fetched Books:", fetchedBooks);
      setBooks(fetchedBooks);
      setFilteredBooks(fetchedBooks); // تعيين الكتب المصفاة
      setCategories([...new Set(fetchedBooks.map(book => book.category))]); // استخراج الفئات
      setLoading(false);
    }, (error) => {
      console.error("Error fetching books:", error);
      setLoading(false);
    });
  }, []);

  // تحديث الكتب المصفاة عند تغيير الفلتر
  const handleFilterChange = (selectedCategory) => {
    if (selectedCategory) {
      const tempBooks = books.filter(book => book.category === selectedCategory);
      setFilteredBooks(tempBooks);
    } else {
      setFilteredBooks(books);
    }
  };

  return (
    <div className="bg-black flex flex-col items-center p-6">
      <Filter categories={categories} onFilterChange={handleFilterChange} />
      
      {loading ? (
        <div>جاري تحميل الكتب...</div>
      ) : filteredBooks.length > 0 ? (
        <div className="flex flex-wrap justify-center gap-8">
          {filteredBooks.map((book) => <BookCard key={book.id} book={book} />)}
        </div>
      ) : (
        <div>لا توجد كتب لعرضها.</div>
      )}
    </div>
  );
}

export default Books;
