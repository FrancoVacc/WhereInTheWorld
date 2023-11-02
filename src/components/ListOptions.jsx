const ListOptions = ({ setOptions, active, setActive }) => {
  const classActive =
    "block w-[60%] md:w-auto bg-white dark:bg-Dark-Blue py-2  rounded mt-1 shadow shadow-gray-300 dark:shadow-none";
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
            className=" px-4 py-1 text-xs dark:text-White-dm-text-lm-elements font-nunito font-semibold my-2  hover:bg-Very-Dark-Blue-lm-text dark:hover:bg-Very-Light-Gray-lm-bg hover:text-Very-Light-Gray-lm-bg dark:hover:text-Very-Dark-Blue-lm-text"
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
