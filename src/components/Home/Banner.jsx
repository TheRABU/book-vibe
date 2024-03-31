import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero w-[1150px] h-[554px] bg-base-200 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold w-5/6">
            Books to freshen up your bookshelf
          </h1>
          <p className="py-6">Read more to enhance your knowledge!</p>
          <button className="btn btn-primary">
            <Link to="/listed-books" />
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
