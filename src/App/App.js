import { useEffect, useState } from "react";
import "./App.css";
import pathIconGojo from "../pics4game/gojo-icon-game.jpg";
import pathIconSatoru from "../pics4game/satoru-game.jpg";
import pathIconNanami from "../pics4game/nanami-game.jpg";
import pathIconKeko from "../pics4game/kieko-game.jpg";
import pathIconToji from "../pics4game/toji-game.jpg";
import pathIconMeimei from "../pics4game/meimei-game.jpg";
import pathQuestionMark from "../pics4game/question.jpg";

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

  function shuffle(array) {
    let currIndex = array.length,
      temporaryValue,
      randIndex;
    while (currIndex !== 0) {
      randIndex = Math.floor(Math.random() * currIndex);
      currIndex -= 1;
      temporaryValue = array[currIndex];
      array[currIndex] = array[randIndex];
      array[randIndex] = temporaryValue;
    }
    return array;
  }
  useEffect(() => {
    setArrCards(shuffle(pairOfArrCards));
  }, []);

  const flipCard = (index) => {
    setOpenedCards((openedCards) => [...openedCards, index]);
    setMoves((prevMove) => prevMove + 1);
  };
  // const handleRestart = () => {};

  return (
    <div className="container">
      <p className="steps">Steps:{moves}</p>
      <div className="cards">
        {arrCards.map((item, index) => {
          let isFlipped = false;
          if (openedCards.includes(index)) isFlipped = true;
          if (matchedCards.includes(item.id)) isFlipped = true;
          return (
            <div
              key={index}
              className={`card ${isFlipped ? "flipped" : ""}`}
              onClick={flipCard(index)}
            >
              <div className="inner">
                <div className="front">
                  <img src={item.img} alt="jopa" width="100px" />
                </div>
                <div className="back">
                  <img src={pathQuestionMark} alt="jopa?" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="btn-restart">restart</button>
    </div>
  );
}

export default App;
