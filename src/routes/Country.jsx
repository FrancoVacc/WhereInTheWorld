import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import CountryButton from "../components/CountryButton";
import CountryBorderBtn from "../components/CountryBorderBtn";

const Country = () => {
  const { country } = useLoaderData();
  const newCountry = country[0];
  const [language, setLanguage] = useState([]);
  const [currency, setCurrency] = useState([]);

  useEffect(() => {
    const { languages, currencies } = newCountry;

    const lan = [...language];
    for (const key in languages) {
      lan.push(languages[key]);
    }
    setLanguage(lan);

    const cur = [...currency];
    for (const key in currencies) {
      cur.push(currencies[key]);
    }
    setCurrency(cur);
  }, []);

  return (
    <div className="w-[100%] mt-10">
      <CountryButton />
      <img
        src={newCountry.flags.svg}
        alt="flag"
        className="w-[80%] mx-auto my-10"
      />
      <div className=" w-[80%] mx-auto my-5">
        <h2 className="  text-lg font-nunito font-bold">
          {newCountry.name.common}
        </h2>
        <div className=" my-10">
          <p className=" font-nunito font-bold text-sm">
            Native Name:{" "}
            <span className=" font-normal">{newCountry.name.common}</span>
          </p>
          <p className=" font-nunito font-bold text-sm">
            Population:{" "}
            <span className=" font-normal">{newCountry.population}</span>
          </p>
          <p className=" font-nunito font-bold text-sm">
            Region: <span className=" font-normal">{newCountry.region}</span>
          </p>
          <p className=" font-nunito font-bold text-sm">
            Sub Region:{" "}
            <span className=" font-normal">{newCountry.subregion}</span>
          </p>
          <p className=" font-nunito font-bold text-sm">
            Capital: <span className=" font-normal">{newCountry.capital}</span>
          </p>
        </div>
        <div className=" my-10">
          <p className=" font-nunito font-bold text-sm">
            Top Level Domine:
            <span className=" font-normal">{newCountry.tld}</span>
          </p>
          <p className=" font-nunito font-bold text-sm">
            Currency:
            {currency.map((cur) => {
              return (
                <span key={cur.name} className=" font-normal">
                  {" "}
                  {cur.name}
                  {", "}
                </span>
              );
            })}
          </p>
          <p className=" font-nunito font-bold text-sm">
            Languagues:
            {language.map((lan) => {
              return (
                <span key={lan} className=" font-normal">
                  {" "}
                  {lan}
                  {", "}
                </span>
              );
            })}
          </p>
        </div>
      </div>
      <div className="w-[80%] mx-auto flex justify-between flex-wrap ">
        {newCountry.borders.map((border) => (
          <div key={border}>
            <CountryBorderBtn border={border} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Country;

export const loaderCountry = async ({ params }) => {
  try {
    const res = await fetch(
      `https://restcountries.com/v3.1/alpha/${params.id}`
    );
    if (!res.ok) {
      throw { message: res.statusText };
    }
    const country = await res.json();
    return { country };
  } catch (err) {
    console.log(err);
  }
};
