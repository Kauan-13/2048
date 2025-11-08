import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Block from "../Block";
import style from "./style.module.css";
import fonts from "../../styles/fonts.module.css"
import type { BoardProps } from "../../types/board";
import { VscDebugRestart } from "react-icons/vsc";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
  board: BoardProps;
  move: (arg: string) => void;
  restart: () => void;
};

const Board = ({ board, move, restart }: Props) => {

    const [popupOpen, setPopupOpen] = useState(true);

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
    }, [board]);

    return (
        <>
            {board.isGameOver && popupOpen ?
                <>
                    <motion.div className={style.popupLose}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <IoCloseOutline className={style.closeIcon} onClick={() => {setPopupOpen(false)}}/>
                        <h2 className={fonts.poppinsRegular}>Você Perdeu!</h2>
                        <button className={style.restartButton} onClick={() => {restart()}}><VscDebugRestart className={style.icon}/>Reiniciar</button>
                    </motion.div>
                    <motion.div className={style.background}
                        initial={{ opacity: 0, backgroundColor: "rgba(0,0,0,0)" }}
                        animate={{ opacity: 1, backgroundColor: "rgba(0,0,0,0.5)" }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    ></motion.div>    
                </> 
                : <button className={`${style.restartButton} ${style.restartButtonAlone}`} onClick={() => {restart(); setPopupOpen(true)}}><VscDebugRestart className={style.icon}/>Reiniciar</button>
            }
            <table className={style.table}>
                <tbody>
                    {
                        board.blocks.map((row, i) => (
                            <tr key={i}>
                                {row.map((cell, i) => (
                                    cell == 0 ? <td key={i}></td> : <td key={i}> <Block value={cell}/> </td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default Board;