const ListOptions = ({ setOptions, active, setActive }) => {
  const classActive = "block w-[60%] bg-white py-2  rounded mt-1";
  const classhidden = "hidden";
  const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleClick = (option) => {
    setOptions(option.target.id);
    setActive(false);
  };

  return (
    <div className={!active ? classhidden : classActive}>
      {options.map((option) => (
        <div
          key={options.indexOf(option)}
          onClick={(option) => {
            handleClick(option);
          }}
        >
          <p
            className=" px-4 py-1 text-xs font-nunito font-semibold my-2 hover:bg-Very-Dark-Blue-lm-text hover:text-Very-Light-Gray-lm-bg"
            id={option}
          >
            {option}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ListOptions;
