const CountryCard = ({ flag, name, population, region, capital }) => {
  return (
    <div className="w-[70%] mx-auto bg-white rounded overflow-hidden my-8 shadow shadow-gray-300">
      <img src={flag} alt="flag" className=" md:w-80" />
      <div className="p-4 pb-7 ">
        <h2 className="font-bold w-[100%] mb-2 font-nunito">{name}</h2>
        <p className=" font-semibold text-xs my-2 font-nunito">
          Population: <span className=" font-normal">{population}</span>
        </p>
        <p className=" font-semibold text-xs my-2 font-nunito">
          Region: <span className=" font-normal">{region}</span>
        </p>
        <p className=" font-semibold text-xs my-2 font-nunito">
          Capital: <span className=" font-normal">{capital}</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
