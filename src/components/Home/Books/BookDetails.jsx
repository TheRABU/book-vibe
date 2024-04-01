import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveBookDetails } from "../../../Utility/LocalStorage";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const book = books.find((book) => book.bookId === idInt);

  const handleWishListBtn = () => {
    saveBookDetails(id);
    toast("You have added this book successfully");
  };
  return (
    <>
      <div>
        <h1>Book details of id: {id}</h1>
        <section className="dark:bg-gray-100 dark:text-gray-800">
          <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div>
              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div className="lg:col-start-2">
                  <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                    {book.bookName}
                  </h3>
                  <hr />
                  <p className="mt-3 text-lg dark:text-gray-600">
                    By: {book.author}
                  </p>
                  <hr />
                  <div>
                    <p>Review: {book.review}</p>
                    <div className="flex space-x-6">
                      <h1>Tags:</h1>
                      {book.tags.map((tag, idx) => (
                        <h1 key={idx}>{tag}</h1>
                      ))}
                    </div>
                    <hr />
                  </div>
                  <div>
                    <h1>Number of Pages: {book.totalPages}</h1>
                    <p>Publisher: {book.publisher}</p>
                    <h1>Year of Publishing: {book.yearOfPublishing}</h1>
                    <p>Rating: {book.rating}</p>
                  </div>
                  <div className="add-btns flex gap-x-5">
                    <button className="btn bg-slate-200">Read</button>
                    <button
                      onClick={handleWishListBtn}
                      className="btn px-7 py-4 bg-[#50B1C9] text-white"
                    >
                      Wishlist
                    </button>
                  </div>
                  <ToastContainer />
                </div>
                <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                  <img
                    src={book.image}
                    alt=""
                    className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BookDetails;
