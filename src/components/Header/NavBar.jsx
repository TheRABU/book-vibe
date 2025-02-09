import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-black underline transition-colors duration-300"
              : ""
          }
          style={({ isActive }) =>
            isActive
              ? { textDecorationColor: "purple", textUnderlineOffset: "0.25em" }
              : {}
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listed-books"
          className={({ isActive }) =>
            isActive
              ? "text-black underline transition-colors duration-300"
              : ""
          }
          style={({ isActive }) =>
            isActive
              ? { textDecorationColor: "purple", textUnderlineOffset: "0.25em" }
              : {}
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pages-to-read"
          className={({ isActive }) =>
            isActive
              ? "text-black underline transition-colors duration-300"
              : ""
          }
          style={({ isActive }) =>
            isActive
              ? { textDecorationColor: "purple", textUnderlineOffset: "0.25em" }
              : {}
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            BoiDekhi.com
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-x-3">
          <a className="btn">Sign Up</a>
          <a className="btn">Sign In</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
