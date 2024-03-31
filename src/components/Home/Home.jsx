import Banner from "./Banner";
import Books from "./Books/Books";

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-20">
        <Banner />
      </div>
      <div className="books">
        <Books />
      </div>
    </>
  );
};

export default Home;
