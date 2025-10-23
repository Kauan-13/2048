import { useState } from "react";
import {initBoard, moveDown, moveLeft, moveRight, moveUp} from "../logic/game.ts";

const useGame = () => {

    const [board, setBoard] = useState(initBoard());

    const move = (mv: string) => {
        switch (mv) {
            case "Up":
                setBoard((prev) => moveUp(prev));
                break;
            case "Down":
                setBoard((prev) => moveDown(prev));
                break;
            case "Right":
                setBoard((prev) => moveRight(prev));
                break;
            case "Left":
                setBoard((prev) => moveLeft(prev));
                break;
        }   
    }

    return {
        board,
        move,
    }
}

export default useGame;