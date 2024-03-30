// fetchData();
async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error("Coundn't fetch the resouces");
    }
    const data = await response.json();
    console.log(data);
    const pokemonSprite = document.getElementById("pokemonSprite");
    pokemonSprite.src = data.sprites.front_default;
    pokemonSprite.style.display = "block";
  } catch (error) {

  }
}