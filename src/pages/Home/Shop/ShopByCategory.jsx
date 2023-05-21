import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Toy from "./Toy";

const ShopByCategory = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Marvel");

  useEffect(() => {
    fetch(
      `https://toy-marketplace-server-orcin.vercel.app/allToys/${activeTab}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [activeTab]);

  const handleTab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="text-center mt-12">
      <h1 className="text-3xl font-bold my-4">Shop By Category</h1>
      <div className="btn-group btn-group-vertical lg:btn-group-horizontal mb-4">
        <Link
          onClick={() => handleTab("Marvel")}
          className="btn btn-active w-32"
        >
          Marvel
        </Link>
        <Link
          onClick={() => handleTab("StarWars")}
          className="btn btn-secondary w-32"
        >
          Star Wars
        </Link>
        <Link
          onClick={() => handleTab("Transformers")}
          className="btn btn-info w-32"
        >
          Transformers
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {toys.map((toy) => (
          <Toy key={toy._id} toy={toy}></Toy>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategory;
