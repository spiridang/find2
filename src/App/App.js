import { useState } from "react";
import "./App.css";
import pathIconGojo from "../../public/gojo-icon-game.jpg";
import pathIconSatoru from "../../public/satoru-game.jpg";
import pathIconNanami from "../../public/nanami-game.jpg";
import pathIconKeko from "../../public/kieko-game.jpg";
import pathIconToji from "../../public/toji-game.jpg";
import pathIconMeimei from "../../public/meimei-game.jpg";
import pathQuestionMark from "../../public/question.jpg";

const initialArrayCards = [
  { id: 1, img: pathIconGojo },
  { id: 2, img: pathIconSatoru },
  { id: 3, img: pathIconNanami },
  { id: 4, img: pathIconKeko },
  { id: 5, img: pathIconToji },
  { id: 6, img: pathIconMeimei },
];

function App() {
  const [arrCards, setArrCards] = useState([]);
  const [openedCards, setOpenedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);
  const [moves, setMoves] = useState(0);

  const pairOfArrCards = [...initialArrayCards, ...initialArrayCards];
  return <div>card game</div>;
}

export default App;
