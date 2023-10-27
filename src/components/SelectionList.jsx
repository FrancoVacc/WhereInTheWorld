import { IoIosArrowDown } from "react-icons/io";
import ListOptions from "./ListOptions";

const SelectionList = ({ props }) => {
  const { option, setOption, active, setActive } = props;

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
