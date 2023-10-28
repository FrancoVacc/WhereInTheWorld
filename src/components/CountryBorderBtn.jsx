import { Link } from "react-router-dom";

const CountryBorderBtn = ({ border }) => {
  return (
    <Link to={`/country/${border}`}>
      <p className=" font-nunito text-xs px-4 py-2 bg-white mx-2 mt-2 shadow shadow-slate-300 rounded">
        {border}
      </p>
    </Link>
  );
};

export default CountryBorderBtn;
