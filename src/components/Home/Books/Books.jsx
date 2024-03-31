import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("api-data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      <h1 className="text-center">Books</h1>
      <div className="grid grid-cols-3 gap-4">
        {books.map((book, idx) => (
          <BookCard key={idx} book={book} />
        ))}
      </div>
    </>
  );
};

export default Books;
