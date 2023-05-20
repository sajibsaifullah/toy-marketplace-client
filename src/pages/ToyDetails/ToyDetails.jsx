import { useLoaderData } from "react-router-dom";
import SingleToy from "./SingleToy";

const ToyDetails = () => {
  const toys = useLoaderData();

  return (
    <div className="container mx-auto">
      {toys.map((singleToy) => (
        <SingleToy key={singleToy._id} singleToy={singleToy}></SingleToy>
      ))}
    </div>
  );
};

export default ToyDetails;
