const ShowMyToys = ({ myToy }) => {
  const { name, sellerName, price, quantity } = myToy;
  console.log(myToy);
  return (
    <tr>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>${price}/pcs</td>
      <td>{quantity} pcs</td>
      <td>
        <button className="btn btn-info">Update</button>
      </td>
      <td>
        <button className="btn btn-error">Delete</button>
      </td>
    </tr>
  );
};

export default ShowMyToys;
