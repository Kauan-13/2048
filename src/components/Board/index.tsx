import { useEffect } from "react";
import Block from "../Block";
import style from "./style.module.css";

interface Props {
  board: number[][];
  move: (arg: string) => void;
};

const Board = ({ board, move }: Props) => {

    console.log(board);

    useEffect(() => {
        const handleKeyDown = (event: { key: string; }) => {
            
            if (event.key === 'ArrowUp') {
                move("Up");
            }
            if (event.key === 'ArrowDown') {
                move("Down");
            }
            if (event.key === 'ArrowRight') {
                move("Right");
            }
            if (event.key === 'ArrowLeft') {
                move("Left");
            }
        };

        document.addEventListener('keydown', handleKeyDown);

            // Função de limpeza para remover o ouvinte de evento quando o componente desmontar
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <table className={style.table}>
            <tbody>
                <tr>
                    {
                        board[0].map((cell, i) => (
                            cell == 0 ? <td key={i}></td> : <td key={i}> <Block value={cell}/> </td>   
                        ))
                    }
                </tr>
                <tr>
                    {
                        board[1].map((cell, i) => (
                            cell == 0 ? <td key={i}></td> : <td key={i}> <Block value={cell}/> </td>   
                        ))
                    }
                </tr>
                <tr>
                    {
                        board[2].map((cell, i) => (
                            cell == 0 ? <td key={i}></td> : <td key={i}> <Block value={cell}/> </td>   
                        ))
                    }
                </tr>
                <tr>
                    {
                        board[3].map((cell, i) => (
                            cell == 0 ? <td key={i}></td> : <td key={i}> <Block value={cell}/> </td>   
                        ))
                    }
                </tr>
            </tbody>
        </table>
    )
}

export default Board;