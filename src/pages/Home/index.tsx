import { useState, useEffect } from "react";
import { Link } from "brouther";
import axios from "axios";

interface DataProps {
  name: string;
  url: string;
}

const Home = () => {
  const [pokemon, setPokemon] = useState<Array<DataProps>>([]);
  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
        setPokemon(response.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  function onClick(e: HTMLButtonElement) {
    console.log(e.target.getAttribute("data-props"));
  }

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {pokemon.map((x) => (
          <li key={x.name} onClick={onClick as any}>
            <Link href="#" data-props={x.url}>
              {x.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
