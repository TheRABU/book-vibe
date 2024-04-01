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
    <div className="card bg-base-100 shadow-xl">
      <figure className="p-10">
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

        {/* <div className="badge badge-secondary">{category}</div> */}
        <h2 className="card-title">{bookName}</h2>
        <p className="text-lg">By: {author}</p>
        <hr />
        <div className="card-actions ">
          <div className="ratings flex justify-between">
            <div>
              <p>{category}</p>
            </div>

            <div className="flex justify-center ">
              <p className="font-bold">{rating}</p>
              <img src="./public/star.png" alt="" />
            </div>
          </div>
          <div>
            <Link to={`/book/${bookId}`}>
              <button className="btn btn-accent">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
