import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import ListOptions from "./ListOptions";

const SelectionList = () => {
  // No se hace asi, hay que hacerlo con una lista y un boton que active y desactive y un use State
  const [option, setOption] = useState("Filter by Region");
  const [active, setActive] = useState(false);

  return (
    <div className="w-[90%] mt-8 mx-auto">
      <div className="flex w-[60%] px-3 py-4 bg-white justify-between align-middle rounded">
        <p className=" text-xs font-nunito font-semibold"> {option}</p>
        <div
          onClick={() => {
            if (active) {
              setActive(false);
            } else {
              setActive(true);
            }
          }}
        >
          <IoIosArrowDown />
        </div>
      </div>
      <ListOptions
        active={active}
        setOptions={setOption}
        setActive={setActive}
      />
    </div>
  );
};

export default SelectionList;
