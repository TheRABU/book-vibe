import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="hero w-[1150px] h-[554px] bg-base-200 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://s3-alpha-sig.figma.com/img/093f/28a2/713be2009ed5e0a38a726ba628d93944?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y7k7kDgqZxPs8qerQCxbihcD-330NENI6lJnSrtKKKck1-Wu8Dptn2j276b3AdZNhqNHfY1dzN263aqzm6q1u4K9hK0V2JSmJdZ1b7wiUEN03JvGwWtUyV~T55bCFqKTr6nRIv05AgtB8ma-fBy5cdK0OGcKCwWTqPv7Dw7bEohyvWFEv3X8twqfAhojEOE~WpzbqcLaxeXfLiQThwUhKtSb4OIJPnnHgWY2D-VqiPHKtcRmJEEeXkvLW~u3opbaEwP~Pv7x3hSyb3x5yuTtzf2nTyRcNDRVcVJ1RhdAKxbBLYQ2XtL8Ep3Pt29jCwuPG~fhQimqFwk4fzkCdvnGjg__"
          className="max-w-sm rounded-lg shadow-2xl "
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
