import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/Diary"}>Diary</Link>
      <br />
      <Link to={"/new"}>new</Link>
      <br />
      <Link to={"/edit"}>edit</Link>
    </>
  );
};

export default RouteTest;
