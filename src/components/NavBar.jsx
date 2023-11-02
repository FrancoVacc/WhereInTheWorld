import { useState } from "react";
import LightDark from "./LightDark";

const NavBar = () => {
  const [dark, setDark] = useState(false);

  return (
    <nav className="w-100% bg-white dark:bg-Dark-Blue py-5 px-2 flex justify-between shadow shadow-gray-300 dark:shadow-gray-800">
      <p className="m-1 text-sm font-bold dark:text-White-dm-text-lm-elements">
        Where in the World?
      </p>
      <LightDark props={{ dark, setDark }} />
    </nav>
  );
};

export default NavBar;
