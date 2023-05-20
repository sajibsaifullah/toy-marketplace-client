import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import ShowMyToys from "./ShowMyToys";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  // console.log(user.email)

  const url = `http://localhost:5000/myToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [url]);

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
            {
                myToys.map(myToy => <ShowMyToys key={myToy._id} myToy={myToy}></ShowMyToys>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
