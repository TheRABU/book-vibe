import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBookDetails } from "../../Utility/LocalStorage";
import ListedBookCard from "./ListedBookCard";

const ListedBooks = () => {
  const books = useLoaderData();
  const [showBooks, setShowBooks] = useState([]);

  useEffect(() => {
    const storedBookIds = getBookDetails();

    if (books.length > 0) {
      const addedBooks = [];
      for (const id of storedBookIds) {
        const book = books.find((book) => book.bookId == id);
        if (book) {
          addedBooks.push(book);
        }
      }
      setShowBooks(addedBooks);
    }
  }, [books]);
  return (
    <div>
      <h2 className="text-center text-4xl ">Books in wishlist are</h2>
      <h1>Total Books You have in your wishlist: {showBooks.length}</h1>
      <div>
        <details className="dropdown">
          <summary className="m-1 btn">Sort By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a>Name</a>
            </li>
            <li>
              <a>Category</a>
            </li>
          </ul>
        </details>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <a role="tab" className="tab">
          Read Books
        </a>
        <a role="tab" className="tab tab-active">
          Wishlist
        </a>
      </div>
      <div className="flex flex-col mt-10 mx-auto">
        {showBooks.map((book, idx) => (
          <ListedBookCard key={idx} book={book} />
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;
