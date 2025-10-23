import Board from "./components/Board"
import useGame from "./hooks/useGame";

function App() {
  const { board, move } = useGame();

  return <Board board={board} move={move}/>
}

export default App;
