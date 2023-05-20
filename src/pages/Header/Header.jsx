import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  // console.log(user)

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <div className="container mx-auto">
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/">Home</Link>
              <Link to="/allToys">All Toys</Link>
              <Link to="/myToys">My Toys</Link>
              <Link to="/addAToys">Add A Toy</Link>
              <Link to="/blogs">Blogs</Link>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl font-bold">
            <img className="w-[20%] rounded-lg mr-1" src="https://i.ibb.co/KzST590/toy-house-logo.png" alt="logo" />
            ToyHouse
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex justify-center items-center gap-4">
            <Link to="/">Home</Link>
            <Link to="/allToys">All Toys</Link>
            <Link to="/myToys">My Toys</Link>
            <Link to="/addAToys">Add A Toy</Link>
            <Link to="/blogs">Blogs</Link>
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div title={user?.displayName} className="w-10 rounded-full">
                  {/* <img src="https://shorturl.at/kT129" /> */}
                  <img src={user?.photoURL} alt="https://shorturl.at/kT129" />
                </div>
              </label>
              <Link className="btn btn-primary" onClick={handleLogOut}>
                Log Out
              </Link>
            </>
          ) : (
            <Link className="btn btn-primary" to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
