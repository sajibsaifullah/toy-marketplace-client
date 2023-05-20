import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const ShowToyInTable = ({ toy }) => {
  const { _id, sellerName, name, subcategory, price, quantity } = toy;

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleViewDetails = (id) => {
    console.log(id);
    navigate('/viewDetails')
    if (!user?.email) {
      navigate("/login");
      alert("You have to log in first to view details");
    }
  };

//   console.log(toy);
  return (
    <tr>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subcategory}</td>
      <td>${price}/pcs</td>
      <td>{quantity} pcs</td>
      <td>
        <button onClick={() => handleViewDetails (_id)} className="btn btn-info">
          View Details
        </button>
      </td>
    </tr>
  );
};

export default ShowToyInTable;
