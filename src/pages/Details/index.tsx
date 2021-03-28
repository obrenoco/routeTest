import { Fragment, useEffect, useState } from "react";
import { Link } from "brouther";
import axios from "axios";

interface DataProps {
  name: string;
  url: string;
}

const Details = () => {
  const [pokemon, setPokemon] = useState<Array<DataProps>>([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        console.log(response);
        setPokemon(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <h1>Details Page</h1>
      {pokemon.map((x) => (
        <p key={x.name}>{x.name}</p>
      ))}
    </div>
  );
};

export default Details;
