const SelectByBrand = () => {
  return (
    <div className="container mx-auto text-center my-8">
      <h2 className="text-3xl font-bold mb-4">SelectByBrand</h2>
     <div className="grid lg:grid-cols-4 gap-4">
     <div className="card w-full">
        <figure>
          <img
            src="https://i.ibb.co/FqJ8CZq/starWar2.jpg"
            alt="starWars"
            className="w-48 h-48"
          />
        </figure>
        <button className="btn btn-sm mt-2">Select</button>
      </div>
     <div className="card w-full">
        <figure>
          <img
            src="https://i.ibb.co/98rWHTs/marvel.jpg"
            alt="marvel"
            className="w-48 h-48"
          />
        </figure>
        <button className="btn btn-sm mt-2">Select</button>
      </div>
     <div className="card w-full">
        <figure>
          <img
            src="https://i.ibb.co/bb4FkkP/transformer.jpg"
            alt="transformer"
            className="w-48 h-48"
          />
        </figure>
        <button className="btn btn-sm mt-2">Select</button>
      </div>
     <div className="card w-full ml-0">
        <figure>
          <img
            src="https://i.ibb.co/f0DBbyH/superman.webp"
            alt="superman"
            className="w-48 h-48"
          />
        </figure>
        <button className="btn btn-sm mt-2">Select</button>
      </div>
     </div>
    </div>
  );
};

export default SelectByBrand;
