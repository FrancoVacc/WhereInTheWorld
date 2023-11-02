import { BsMoon, BsSun } from "react-icons/bs";

const html = document.getElementById("html");

const LightDark = ({ props }) => {
  const { dark, setDark } = props;

  const handleClick = () => {
    if (dark == false) {
      html.classList.toggle("dark");
      setDark(true);
    } else {
      html.classList.toggle("dark");
      setDark(false);
    }
  };

  if (dark == false) {
    return (
      <div className="flex h-max align-middle p-1" onClick={handleClick}>
        <BsMoon />
        <p className=" text-xs ml-2">Dark Mode</p>
      </div>
    );
  } else {
    return (
      <div
        className="flex h-max align-middle p-1 text-white"
        onClick={handleClick}
      >
        <BsSun />
        <p className=" text-xs ml-2">Light Mode</p>
      </div>
    );
  }
};

export default LightDark;
