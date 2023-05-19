const Gallery = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-center my-4">Gallery</h2>
      <div>
        <div className="grid grid-cols-2 ml-12 lg:grid-cols-3 gap-4 lg:ml-28">
            <img
              src="https://i.ibb.co/2KbXH7m/iron-man.webp"
              alt="photo"
              className="w-[70%] lg:h-[300px] rounded-lg hover:translate-x-3"
            />
            <img
              src="https://i.ibb.co/gFvyvpM/captain-america.webp"
              alt="photo"
              className="w-[70%] lg:h-[300px] rounded-lg hover:translate-x-3"
            />
            <img
              src="https://i.ibb.co/9pqS9Cg/darth-vader.webp"
              alt="photo"
              className="w-[70%] lg:h-[300px] rounded-lg hover:translate-x-3"
            />
            <img
              src="https://i.ibb.co/R9kpgCh/optimus-prime.jpg"
              alt="photo"
              className="w-[70%] lg:h-[300px] rounded-lg hover:translate-x-3"
            />
            <img
              src="https://i.ibb.co/W5KqHcN/thor.jpg"
              alt="photo"
              className="w-[70%] lg:h-[300px] rounded-lg hover:translate-x-3"
            />
            <img
              src="https://i.ibb.co/DM0nnZX/black-widow.jpg"
              alt="photo"
              className="w-[70%] lg:h-[300px] rounded-lg hover:translate-x-3"
            />

        </div>
      </div>
    </div>
  );
};

export default Gallery;
