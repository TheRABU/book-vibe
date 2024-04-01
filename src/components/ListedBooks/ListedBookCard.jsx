import { FaLocationDot } from "react-icons/fa6";
import { MdOutlinePeopleAlt, MdContactPage } from "react-icons/md";
import { Link } from "react-router-dom";

const ListedBookCard = ({ book }) => {
  const {
    image,
    bookName,
    author,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    category,
    rating,
    bookId,
  } = book;
  return (
    <div className="flex justify-center my-5 bg-base-100 shadow-xl">
      <figure className="p-10 shadow-xl">
        <img src={image} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{bookName}</h2>
        <p>By: {author}</p>
        <div className="flex items-center">
          <h2>Tags: </h2>
          <div className="flex ml-5 space-x-4">
            {tags.map((item, idx) => (
              <div key={idx} className="badge badge-accent">
                {item}
              </div>
            ))}
            <div className="flex space-x-2 items-center">
              <FaLocationDot />
              <p>Year of Publishing: {yearOfPublishing}</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <MdOutlinePeopleAlt />
              <p>Publisher: {publisher}</p>
            </div>
            <div className="flex items-center">
              <MdContactPage />
              <p>Pages {totalPages}</p>
            </div>
          </div>
        </div>

        <div className="card-actions">
          <button className="btn rounded-2xl px-5 py-3 bg-[#328EFF] text-white font-bold">
            Category: {category}
          </button>
          <button className="btn rounded-2xl px-5 py-3 bg-[#FFAC33] text-white font-bold">
            Rating: {rating}
          </button>
          <Link
            to={`/book/${bookId}`}
            className="btn rounded-2xl px-5 py-3 bg-[#23BE0A] text-white font-bold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
    // <div className="card flex my-6 items-start bg-slate-200 shadow-xl">
    //   <div className="left-side-image p-10">
    //     <img src={image} alt="" />
    //   </div>
    //   <div className="right-side-content">
    //     <div className="heading">
    //       <h1>{bookName}</h1>
    //       <p>By: {author}</p>
    //     </div>
    //     <div className="tags">
    //       <div className="flex space-x-4">
    //         {tags.map((item, idx) => (
    //           <div key={idx} className="badge badge-accent">
    //             {item}
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ListedBookCard;
