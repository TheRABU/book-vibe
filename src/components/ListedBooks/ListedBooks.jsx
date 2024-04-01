import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getBookDetails } from "../../Utility/LocalStorage";
import ListedBookCard from "./ListedBookCard";

const ListedBooks = () => {
  const books = useLoaderData();
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);
  const [displaySortedBooks, setDisplaySortedBooks] = useState([]);

  const handleAddToWishlist = (book) => {
    setWishlistBooks((prevWishlistBooks) => [...prevWishlistBooks, book]);
  };

  const handleAddToReadList = (book) => {
    setReadBooks((prevReadBooks) => [...prevReadBooks, book]);
  };

  const handleBooksFilter = (filter) => {
    if (filter === "all") {
      setDisplaySortedBooks([...wishlistBooks, ...readBooks]);
    } else if (filter === "rating") {
      const sortedByRating = [...wishlistBooks, ...readBooks].sort(
        (a, b) => b.rating - a.rating
      );
      setDisplaySortedBooks(sortedByRating);
    } else if (filter === "pages") {
      const sortedByPages = [...wishlistBooks, ...readBooks].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setDisplaySortedBooks(sortedByPages);
    } else if (filter === "year") {
      const sortedByYear = [...wishlistBooks, ...readBooks].sort(
        (a, b) => b.yearOfPublishing - a.yearOfPublishing
      );
      setDisplaySortedBooks(sortedByYear);
    }
  };

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
      setWishlistBooks(addedBooks);
      setDisplaySortedBooks(addedBooks);
    }
  }, [books]);
  return (
    <div>
      <h2 className="text-center text-4xl ">Books are</h2>
      <h1>Total Books You have in your wishlist: {wishlistBooks.length}</h1>
      <div>
        <details className="dropdown">
          <summary className="m-1 btn">Sort By</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={() => handleBooksFilter("all")}>All</a>
            </li>
            <li>
              <a onClick={() => handleBooksFilter("rating")}>Rating</a>
            </li>
            <li>
              <a onClick={() => handleBooksFilter("pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleBooksFilter("year")}>Year of Publish</a>
            </li>
          </ul>
        </details>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <a
          role="tab"
          className="tab"
          onClick={() => setDisplaySortedBooks(readBooks)}
        >
          Read Books
        </a>
        <a
          role="tab"
          className="tab tab-active"
          onClick={() => setDisplaySortedBooks(wishlistBooks)}
        >
          Wishlist
        </a>
      </div>
      <div className="flex flex-col mt-10 mx-auto">
        {displaySortedBooks.map((book, idx) => (
          <ListedBookCard
            key={idx}
            book={book}
            onAddToWishlist={handleAddToWishlist}
            onAddToReadList={handleAddToReadList}
          />
        ))}
      </div>
    </div>
  );
};

export default ListedBooks;
