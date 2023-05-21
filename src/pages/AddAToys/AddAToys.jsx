import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import useTitle from "../../hooks/useTitle";

const AddAToys = () => {
  const { user } = useContext(AuthContext);
  useTitle('AddAToys')

  const handleAddAToy = (event) => {
    event.preventDefault();
    const form = event.target;

    const picture = form.picture.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    // const email = form.email.value;
    const email = user?.email;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const ratings = form.ratings.value;
    const quantity = form.quantity.value;
    const description = form.description.value;

    const toy = {
      picture,
      name,
      sellerName,
      email,
      subCategory,
      price,
      ratings,
      quantity,
      description,
    };

    console.log(toy);

    fetch("https://toy-marketplace-server-orcin.vercel.app/myToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.result.insertedId) {
          alert("Toy added successfully");
        }
      });
  };

  return (
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold my-8">Add a Toys</h2>
      <form onSubmit={handleAddAToy}>
        <input
          type="text"
          name="picture"
          placeholder="Picture URL"
          required
          className="input input-bordered w-full max-w-xs mr-2"
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          name="sellerName"
          placeholder="Seller Name"
          required
          className="input input-bordered w-full max-w-xs mr-2 mt-2"
        />
        <input
          type="text"
          name="email"
          defaultValue={user?.email}
          placeholder="Seller Email"
          required
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          name="subCategory"
          placeholder="Sub-Category"
          required
          className="input input-bordered w-full max-w-xs mr-2 mt-2"
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          required
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          name="ratings"
          placeholder="Ratings"
          required
          className="input input-bordered w-full max-w-xs mr-2 mt-2"
        />
        <input
          type="text"
          name="quantity"
          placeholder="Available Quantity"
          required
          className="input input-bordered w-full max-w-xs"
        />
        <br />
        <input
          type="text"
          name="description"
          placeholder="Detail Description"
          className="input input-bordered w-1/2 mt-2"
        />
        <br />
        <input type="submit" value="Submit" className="btn btn-info my-4" />
      </form>
    </div>
  );
};

export default AddAToys;
