import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import ShowMyToys from "./ShowMyToys";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useTitle('MyToys')

  // console.log(user.email)

  const url = `https://toy-marketplace-server-orcin.vercel.app/myToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("Are you sure tou want to delete");

    if (proceed) {
      fetch(`https://toy-marketplace-server-orcin.vercel.app/myToys/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = myToys.filter((myToy) => myToy._id !== id);
            setMyToys(remaining);
          }
        });
    }
  };

  return (
    <div className="container mx-auto mt-4">
      <div className="overflow-scroll w-full">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Seller</th>
              <th>Toy Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Button</th>
              <th>Button</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy) => (
              <ShowMyToys
                key={myToy._id}
                myToy={myToy}
                handleDelete={handleDelete}
              ></ShowMyToys>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
