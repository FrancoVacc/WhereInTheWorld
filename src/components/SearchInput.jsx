import { BiSearchAlt2 } from "react-icons/bi";

export const SearchInput = ({ props }) => {
  const { input, setInput } = props;

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex bg-white w-[90%] md:h-10 md:w-[40%] px-5 py-3 mx-auto rounded shadow shadow-gray-300">
      <div className=" mr-2 text-gray-400">
        <BiSearchAlt2 />
      </div>
      <input
        type="text"
        placeholder="Search for a country..."
        className=" text-xs w-[90%] ml-3"
        value={input}
        onChange={handleChange}
      />
    </div>
  );
};
