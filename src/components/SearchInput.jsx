import { BiSearchAlt2 } from "react-icons/bi";

export const SearchInput = () => {
  return (
    <div className="flex bg-white w-[90%] px-5 py-3 mx-auto rounded">
      <div className=" mr-2 text-gray-400">
        <BiSearchAlt2 />
      </div>
      <input
        type="text"
        placeholder="Search for a country..."
        className=" text-xs w-[90%] ml-3"
      />
    </div>
  );
};
