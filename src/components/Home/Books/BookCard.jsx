import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    category,
    tags,
    yearOfPublishing,
    rating,
  } = book;
  return (
    <Link to={`/book/${bookId}`}>
      <div className="card bg-white shadow-xl h-full">
        <figure className="p-10 bg-base-200 ">
          <img src={image} alt="book-image" className="rounded-xl" />
        </figure>
        <div className="card-body items-start">
          <div className="flex space-x-4">
            {tags.map((item, idx) => (
              <div key={idx} className="badge badge-accent">
                {item}
              </div>
            ))}
          </div>

          <h2 className="card-title">{bookName}</h2>
          <p className="text-lg">By: {author}</p>
          <hr />
          <div className="card-actions flex justify-between">
            <div>
              <p>{category}</p>
            </div>
            <div className="flex justify-center">
              <p className="font-bold">{rating}</p>
              <img src="./public/star.png" alt="" />
            </div>

            <div>
              {/* <button className="btn btn-accent">View Details</button> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
