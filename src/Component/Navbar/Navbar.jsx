import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import ChangeThem from "./ThemChang";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Logout faileds:", error);
      });
  };

  return (
    <div>
      <div className="navbar bg-base-100 border justify-between">
        <div className="navbar-start">
          {/* Hamburger menu for mobile */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li><a href="/">Home</a></li>
              <li><a href="/allreciews">All Reviews</a></li>
              <li><a href="/addReviews">Add Reviews</a></li>
              <li><a href="/myReviews">My Reviews</a></li>
              <li><a href="/gameWatchList">Game WatchList</a></li>
            </ul>
          </div>
          <Link to="/" className="text-xl">Game Review</Link>
        </div>

        {/* Navigation for large screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link className="text-blue-700 font-bold text-center ml-5 border py-3 px-4 rounded-lg" to="/">Home</Link></li>
            <li><Link className="text-blue-700 font-bold text-center ml-5 border py-3 px-4 rounded-lg" to="/allreciews">All Reviews</Link></li>
            <li><Link className="text-blue-700 font-bold text-center ml-5 border py-3 px-4 rounded-lg" to="/addReviews">Add Reviews</Link></li>
            <li><Link className="text-blue-700 font-bold text-center ml-5 border py-3 px-4 rounded-lg" to="/myReviews">My Reviews</Link></li>
            <li><Link className="text-blue-700 font-bold text-center ml-5 border py-3 px-4 rounded-lg" to="/gameWatchList">Game WatchList</Link></li>
          </ul>
        </div>

        {/* Profile / Logout */}
        <div className="flex-none">
          <div className="dropdown justify-end">
            <ChangeThem />
          </div>
          {user ? (
            <div className="relative group">
              {/* Avatar with hover */}
              <div className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user ? <img src={user.photoURL} alt="user" /> : "user nei"}
                </div>
              </div>
              {/* Show user details on hover */}
              <div className="absolute z-10 right-0 mt-2 w-52 p-2 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300">
                <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <p className="ml-10 font-bold text text-red">{user?.displayName}</p>
                  </li>
                  <li>
                    <button onClick={handleLogOut}>Logout</button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <Link to="/login">Login</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
