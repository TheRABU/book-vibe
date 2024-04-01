import { useEffect, useState } from "react";
import BookCard from "./BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);
  // const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("api-data.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 px-6 gap-7 my-16">
        {books.map((book, idx) => (
          <BookCard key={idx} book={book} />
        ))}
      </div>
      {/* <div className={dataLength === books.length && "hidden"}>
        <button
          onClick={() => setDataLength(books.length)}
          className="btn btn-primary"
        >
          Show All
        </button>
      </div> */}
    </>
  );
};

export default Books;
