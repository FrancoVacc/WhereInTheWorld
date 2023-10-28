import { useEffect, useState } from "react";

//components
import CountryCard from "../components/CountryCard";
import { SearchInput } from "../components/SearchInput";
import SelectionList from "../components/SelectionList";
import { Link } from "react-router-dom";

export const Home = () => {
  const [data, setData] = useState([]);
  const [option, setOption] = useState("Filter by Region");
  const [active, setActive] = useState(false);
  const [input, setInput] = useState("");

  const getData = async (url) => {
    try {
      const res = await fetch(url);

      if (res.ok == false) {
        throw { message: res.statusText };
      }

      const newData = await res.json();
      setData(newData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData("https://restcountries.com/v3.1/all");
  }, []);

  useEffect(() => {
    if (option != "Filter by Region") {
      getData("https://restcountries.com/v3.1/region/" + option);
    }
  }, [option]);

  useEffect(() => {
    if (input != "") {
      getData("https://restcountries.com/v3.1/name/" + input);
    }
  }, [input]);

  return (
    <div className=" h-screen pt-5">
      <div className="absolute z-10 w-[100%]">
        <SearchInput props={{ input, setInput }} />
        <SelectionList props={{ option, setOption, active, setActive }} />
      </div>
      <div className="relative top-32">
        {data.map((item) => {
          return (
            <Link key={item.name.common} to={`/country/${item.cca3}`}>
              <CountryCard
                flag={item.flags.svg}
                name={item.name.common}
                population={item.population}
                region={item.region}
                capital={item.capital}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
