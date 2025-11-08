import Board from "./components/Board"
import Control from "./components/Control";
import useGame from "./hooks/useGame";
import "./App.css";
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Tutorial from "./components/Tutorial";
import { useState } from "react";

function App() {
    const { board, move, restart } = useGame();
    const [tutorialOpen, setTutorialOpen] = useState(false);

    return (
        <>
        <main>
            { tutorialOpen ?
                <section className="tutorial">
                    <Tutorial close={() => setTutorialOpen(false)}/>
                </section>
                : null
            }
            <section className="game">
                <Board board={board} move={move} restart={restart} />
                <div className="control">
                    <Control move={move} />
                </div>
            </section>
        </main>
        <footer>
            <FaRegQuestionCircle onClick={() => {setTutorialOpen(true)}}/>
            <a href="https://github.com/Kauan-13/2048" target="_blank"><FaGithub/></a>
        </footer>
        </>
    )
}

export default App;
