const CountryCard = () => {
  return (
    <div className="w-[80%] mx-auto bg-Very-Light-Gray-lm-bg rounded">
      <img src="" alt="flag" />
      <div className="p-2">
        <h2>Country's Name</h2>
        <p>
          Poppulation: <span>number</span>
        </p>
        <p>
          Region: <span>Region</span>
        </p>
        <p>
          Capital: <span>Capital's Name</span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
