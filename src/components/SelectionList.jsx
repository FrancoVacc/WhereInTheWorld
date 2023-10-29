import { IoIosArrowDown } from "react-icons/io";
import ListOptions from "./ListOptions";

const SelectionList = ({ props }) => {
  const { option, setOption, active, setActive } = props;

  return (
    <div className="w-[90%] mt-8 mx-auto md:mt-0 md:flex md:flex-row-reverse">
      <div>
        <div className="flex w-[60%] md:w-auto px-3 py-4 bg-white justify-between align-middle rounded shadow shadow-gray-300">
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
    </div>
  );
};

export default SelectionList;
