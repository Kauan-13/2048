import { useEffect } from "react";
import Block from "../Block";
import style from "./style.module.css";

interface Props {
  board: number[][];
  move: (arg: string) => void;
};

const Board = ({ board, move }: Props) => {

    useEffect(() => {
        const handleKeyDown = (event: { code: string; }) => {
            
            if (event.code === 'ArrowUp' || event.code === 'KeyW') {
                move("Up");
            }
            if (event.code === 'ArrowDown' || event.code === 'KeyS') {
                move("Down");
            }
            if (event.code === 'ArrowRight' || event.code === 'KeyD') {
                move("Right");
            }
            if (event.code === 'ArrowLeft' || event.code === 'KeyA') {
                move("Left");
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <table className={style.table}>
            <tbody>
                {
                    board.map((row, i) => (
                        <tr key={i}>
                            {row.map((cell, i) => (
                                cell == 0 ? <td key={i}></td> : <td key={i}> <Block value={cell}/> </td>
                            ))}
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

export default Board;