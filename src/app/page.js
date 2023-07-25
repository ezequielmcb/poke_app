import Card from "../../components/Card";
import "./globals.css";

async function getData() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
  const data = await response.json();

  return data.results;
}

export default async function Home() {
  const dataPok = await getData();

  return (
    <div id="container">
      {dataPok.map((el, i) => <Card key={i} poke={el} /> )}
    </div>
  );
}
