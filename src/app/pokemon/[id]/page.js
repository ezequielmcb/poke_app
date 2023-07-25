const getData = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await res.json();
  return data;
};

async function Page({ params }) {
  const id = params.id;
  const dataPokemon = await getData(id);
  const urlImg1 = dataPokemon.sprites.other.home.front_default;
  const urlImg2 = dataPokemon.sprites.other.home.front_shiny;
  const urlImg3 = dataPokemon.sprites.other.dream_world.front_default;

  return (
    <main id="containerCard">
      <div className="cardIndividual">
        <section>
          <div>
            <img src={urlImg1} alt={dataPokemon.name} />
          </div>
          <div>
            <img src={urlImg2} alt={dataPokemon.name} />
          </div>
          <div>
            <img src={urlImg3} alt={dataPokemon.name} />
          </div>
        </section>
        <section>
          <h1>{dataPokemon.name}</h1>
          <p>ID: {dataPokemon.id}</p>
          <p>Height: {dataPokemon.height}</p>
          <p>Weight: {dataPokemon.weight}</p>
          <p>Base experience: {dataPokemon.base_experience}</p>
        </section>
      </div>
    </main>
  );
}

export default Page;