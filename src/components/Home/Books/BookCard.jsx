const BookCard = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,

    category,
    yearOfPublishing,
    rating,
  } = book;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="p-10">
        <img src={image} alt="book-image" className="rounded-xl" />
      </figure>

      <div className="card-body items-start">
        <div className="badge badge-secondary">{category}</div>
        <h2 className="card-title">{bookName}</h2>
        <p className="text-lg">By: {author}</p>
        <hr />
        <div className="card-actions flex justify-between">
          <div>
            <p>{category}</p>
          </div>
          <div className="ratings flex items-center">
            <p className="font-bold">{rating}</p>
            <img src="./public/star.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
