import Link from "next/link";

async function getDataPoke(link) {
  const res = await fetch(link);
  const data = await res.json();
  return data;
}

async function Card({ poke }) {
  const datosPokemon = await getDataPoke(poke.url);
  const urlImg = datosPokemon.sprites.other.home.front_default;

  return (
    <Link href={`pokemon/${datosPokemon.id}`}>
      <div className="card">
        <div>
          <img src={urlImg} alt={datosPokemon.name} />
        </div>
        <div>
          <h1>{datosPokemon.name}</h1>
          <p>ID: {datosPokemon.id}</p>
          <p>Height: {datosPokemon.height}</p>
          <p>Weight: {datosPokemon.weight}</p>
          <p>Base experience: {datosPokemon.base_experience}</p>
        </div>
      </div>
    </Link>
  );
}

export default Card;