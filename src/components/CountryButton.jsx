import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const CountryButton = () => {
  return (
    <Link to={"/"}>
      <div className=" px-2 py-1 rounded shadow-sm shadow-slate-300 flex  min-w-[20%] max-w-[20%] bg-white mx-8 justify-between">
        <BsArrowLeft />
        <p className=" font-nunito text-xs">Back</p>
      </div>
    </Link>
  );
};

export default CountryButton;
