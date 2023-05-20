const SingleToy = ({ singleToy }) => {
  const { _id, picture, name, sellerName, price, rating, quantity } = singleToy;
  // console.log(singleToy)
  const id = JSON.parse(localStorage.getItem("toyId"));

  return (
    <div>
      {id == _id && (
        <div className="flex justify-center items-center">
          <div className="w-1/2">
            <img src={picture} alt="img" className="rounded-xl w-3/4" />
          </div>
          <div className="w-1/2">
            <h3 className="text-3xl font-bold">Toy Name: {name}</h3>
            <h4 className="text-3xl my-2">Seller Name: {sellerName}</h4>
            <p>Price: ${price}</p>
            <p className="mt-1">Ratings: {rating}</p>
            <p>Available Quantity: {quantity}</p>
            <p>
              <small>
                Detail Description: Superhero toys, inspired by iconic
                characters from comics and movies, captivated children and
                collectors alike. With tie-ins to blockbuster films, licensing
                agreements, and engaging marketing campaigns, these action
                figures and playsets fueled imaginations and brought beloved
                superheroes to life in the hands of fans.
              </small>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleToy;
