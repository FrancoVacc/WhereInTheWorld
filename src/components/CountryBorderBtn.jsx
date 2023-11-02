import { Link } from "react-router-dom";

const CountryBorderBtn = ({ border }) => {
  return (
    <Link to={`/country/${border}`}>
      <p className=" font-nunito text-xs px-4 py-2 bg-white dark:bg-Dark-Blue mx-2 mt-2 md:mt-0 shadow shadow-gray-300 dark:shadow-gray-900 rounded">
        {border}
      </p>
    </Link>
  );
};

export default CountryBorderBtn;
