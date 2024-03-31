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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-16">
        {books.map((book, idx) => (
          <BookCard key={idx} book={book} />
        ))}
      </div>
    </>
  );
};

export default Books;
