import Banner from "./Banner";
import Books from "./Books/Books";

const Home = () => {
  return (
    <>
      <div className="banner my-10">
        <Banner />
      </div>
      <div className="books">
        <h1 className="text-center text-4xl font-bold py-5">Books</h1>
        <Books />
      </div>
    </>
  );
};

export default Home;
