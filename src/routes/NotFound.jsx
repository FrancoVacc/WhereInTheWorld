import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="bg-Dark-Blue">
      <h1 className=" text-Very-Light-Gray-lm-bg text-xl">
        Ups this page is empty
      </h1>
      <p className=" text-Very-Light-Gray-lm-bg text-l">Error{error}</p>
    </div>
  );
};

export default NotFound;
