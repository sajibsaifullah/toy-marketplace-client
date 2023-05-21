import { useLoaderData } from "react-router-dom";
import SingleToy from "./SingleToy";
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
  const toys = useLoaderData();

  useTitle('ToyDetails');

  return (
    <div className="container mx-auto">
      {toys.map((singleToy) => (
        <SingleToy key={singleToy._id} singleToy={singleToy}></SingleToy>
      ))}
    </div>
  );
};

export default ToyDetails;
