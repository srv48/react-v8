import { useParams } from "react-router-dom";

const Details = () => {
  let { id } = useParams();
  return <h2>{id}</h2>;
};

export default Details;
