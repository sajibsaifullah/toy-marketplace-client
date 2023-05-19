const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://i.ytimg.com/vi/tKjNRVxjeEI/maxresdefault.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-3/4">
          <h1 className="mb-5 text-5xl font-bold">
            All SupperHeroes Are There
          </h1>
          <p className="mb-5">
            Superhero toys, inspired by iconic characters from comics and
            movies, captivated children and collectors alike. With tie-ins to
            blockbuster films, licensing agreements, and engaging marketing
            campaigns, these action figures and playsets fueled imaginations and
            brought beloved superheroes to life in the hands of fans.
          </p>
          <button className="btn btn-accent">See More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
