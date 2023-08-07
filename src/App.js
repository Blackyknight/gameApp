import  imgDungeon from "./utilities/5 Minute dungeon.png";
import imgCitadels from "./utilities/citadels.jpg";
import imgTsuro from "./utilities/kitchen.png";
import imgLoup from "./utilities/Loup Garou.png";
import imgUno from "./utilities/UNO.png";
import {useState, useEffect} from "react";
import Rev from './component/Rev';
import "./styles/App.css"

const games = [
  {name: "Dungeon", image: imgDungeon, type: "cooperative", description: "Bienvenue dans l'univers frénétique de 5 Minute Dungeon !"},
  {name: "Citadels",image: imgCitadels, type: "bluff", description: "Bienvenue dans la cité intrigante de Citadels !"},
  {name: 'Tsuro',image: imgTsuro, type: "reflexion", description: "Bienvenue dans le monde serein de Tsuro !"},
  {name: "Loup Garou",image: imgLoup, type: "deduction", description: "Préparez-vous à une nuit remplie de secrets et de trahisons avec ce jeu de rôle captivant !"},
  {name: "Uno",image: imgUno, type: "hasard", description: "Bienvenue dans l'univers coloré d'Uno !"}
]

function App() {
  const [counter, setCounter] = useState(2)
  const [game, setGame] = useState(games[counter])

  useEffect(() => {
    setGame(games[counter]);
  }, [counter])

  function moveLeft(){
    setCounter(counter === 0 ? games.length - 1 : counter - 1)
  }

  function moveRight(){
    setCounter(counter === games.length - 1 ? 0 : counter + 1)
  }

  function randomPick(){
    const random = Math.floor(Math.random() * games.length);
    return random;
  }

  function moveRandom(){
    setCounter(randomPick)
  }

  return (
    <>
      <h1>Our Games</h1>
      <Rev img={game.image} name={game.name} type={game.type} description={game.description} moveLeft={moveLeft} moveRight={moveRight} moveRandom={moveRandom} />
    </>
  );
}

export default App;