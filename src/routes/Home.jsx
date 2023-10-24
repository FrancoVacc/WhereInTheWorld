import CountryCard from "../components/CountryCard";
import { SearchInput } from "../components/SearchInput";
import SelectionList from "../components/SelectionList";

export const Home = () => {
  return (
    <div className=" h-screen pt-5">
      <div className="absolute z-10 w-[100%]">
        <SearchInput />
        <SelectionList />
      </div>
      <div className="relative top-32">
        <CountryCard />
      </div>
    </div>
  );
};
