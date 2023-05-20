const Toy = ({ toy }) => {
  const { picture, name, price, rating } = toy || {};

//   console.log(toy)

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={picture}
          alt="photo"
          className="rounded-xl w-[70%] lg:h-[300px]"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <div>
          <p>Price: ${price}</p>
          <p>Ratings: {rating}</p>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Toy;
