import { useEffect, useState } from "react";
import ShowToyInTable from "./ShowToyInTable";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  useTitle('AllToys');

  useEffect(() => {
    fetch("https://toy-marketplace-server-orcin.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, []);

  return (
    <div className="container mx-auto mt-4">
      <div className="overflow-scroll w-full">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Sub Category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy) => (
              <ShowToyInTable key={toy._id} toy={toy}></ShowToyInTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
