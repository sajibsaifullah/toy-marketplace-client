import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center flex flex-col justify-center items-center">
        <img src="https://i.ibb.co/PDNW7QF/404.png" alt="" className="w-[30%]" />
        <Link to="/">
          <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
