import { useState } from "react";

function SquareBox(props) {
  const { handleBoxButtonClick, nextPlayer, boxes, winner } = props;
  return (
    <center>
      <div className="title">Tic Tac Toe</div>
      {winner ? (
        <h2>Player {winner} Won</h2>
      ) : (
        <h2>Next Player: {nextPlayer}</h2>
      )}
      <div className="board-row">
        <button className="square" onClick={() => handleBoxButtonClick(0)}>
          {boxes[0]}
        </button>
        <button className="square" onClick={() => handleBoxButtonClick(1)}>
          {boxes[1]}
        </button>
        <button className="square" onClick={() => handleBoxButtonClick(2)}>
          {boxes[2]}
        </button>
      </div>
      <div className="board-row">
        <button className="square" onClick={() => handleBoxButtonClick(3)}>
          {boxes[3]}
        </button>
        <button className="square" onClick={() => handleBoxButtonClick(4)}>
          {boxes[4]}
        </button>
        <button className="square" onClick={() => handleBoxButtonClick(5)}>
          {boxes[5]}
        </button>
      </div>
      <div className="board-row">
        <button className="square" onClick={() => handleBoxButtonClick(6)}>
          {boxes[6]}
        </button>
        <button className="square" onClick={() => handleBoxButtonClick(7)}>
          {boxes[7]}
        </button>
        <button className="square" onClick={() => handleBoxButtonClick(8)}>
          {boxes[8]}
        </button>
      </div>
    </center>
  );
}

const getWinner = (boxes) => {
  let winner = null;
  const winningBoxes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  winningBoxes.forEach((winningNumber) => {
    const [first, second, third] = winningNumber;
    if (
      boxes[first] &&
      boxes[first] === boxes[second] &&
      boxes[first] === boxes[third]
    ) {
      winner = boxes[first];
      return;
    }
  });

  return winner;
};
function App() {
  const players = ["X", "0"];
  const [boxes, setBoxes] = useState(Array(9).fill(null));
  const [nextPlayer, setNextPlayer] = useState(players[0]);
  const [winner, setWinner] = useState(null);

  const handleBoxButtonClick = (index) => {
    if (boxes[index] || winner) {
      return;
    }
    setNextPlayer((prevState) =>
      prevState === players[0] ? players[1] : players[0]
    );
    boxes[index] = nextPlayer;
    setBoxes(boxes);

    setWinner(getWinner(boxes));
  };
  return (
    <SquareBox
      handleBoxButtonClick={handleBoxButtonClick}
      boxes={boxes}
      setBoxes={setBoxes}
      nextPlayer={nextPlayer}
      winner={winner}
    />
  );
}

export default App;
