import Board from "./components/Board"
import Control from "./components/Control";
import useGame from "./hooks/useGame";
import "./App.css";

function App() {
    const { board, move } = useGame();

    return (
        <main>
            <Board board={board} move={move} />
            <div className="control">
                <Control move={move} />
            </div>
        </main>
    )
}

export default App;
