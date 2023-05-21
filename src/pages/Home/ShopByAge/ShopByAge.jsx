const ShopByAge = () => {
  return (
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mt-8 mb-4">Shop By Age</h2>
      <div className="grid lg:grid-cols-4 gap-4">
        <div className="bg-gray-200 rounded-lg p-4">
          <p className="text-xl font-bold">Pre-School</p>
          <p className="font-bold">Age: 3-5</p>
          <p className="text-gray-700 mt-2">
            Age-appropriate action hero toys for preschoolers inspire
            imaginative play and promote gross motor skills development. Focus
            on simplicity and durability.
          </p>
          <button className="btn btn-sm mt-2">Buy Now</button>
        </div>
        <div className="bg-gray-200 rounded-lg p-4">
          <p className="text-xl font-bold">Kids</p>
          <p className="font-bold">Age: 4-5</p>
          <p className="text-gray-700 mt-2">
            Choose action hero toys that encourage imaginative play, promote
            fine motor skills, and are age-appropriate and safe.
          </p>
          <button className="btn btn-sm mt-2">Buy Now</button>
        </div>
        <div className="bg-gray-200 rounded-lg p-4">
          <p className="text-xl font-bold">Kids</p>
          <p className="font-bold">Age: 6-9</p>
          <p className="text-gray-700 mt-2">
            Select action hero toys that encourage creativity, imaginative play,
            problem-solving, and are age-appropriate with engaging features.
          </p>
          <button className="btn btn-sm mt-2">Buy Now</button>
        </div>
        <div className="bg-gray-200 rounded-lg p-4">
          <p className="text-xl font-bold">Kids</p>
          <p className="font-bold">Age: 9-13</p>
          <p className="text-gray-700 mt-2">
            Consider action hero toys that offer engaging storytelling, advanced
            features, and opportunities for creative play and strategic
            thinkings.
          </p>
          <button className="btn btn-sm mt-2">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ShopByAge;
