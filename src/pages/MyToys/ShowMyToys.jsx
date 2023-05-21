import { Link } from "react-router-dom";

const ShowMyToys = ({ myToy, handleDelete }) => {
  const { _id, name, sellerName, price, quantity } = myToy;
  // console.log(myToy);
  return (
    <tr>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>${price}/pcs</td>
      <td>{quantity} pcs</td>
      <td>
        {/* <Link to='/updateToy' className="btn btn-info">Update</Link> */}
        <Link to={`/updateToy/${_id}`} className="btn btn-info">Update</Link>
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} className="btn btn-error">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ShowMyToys;
