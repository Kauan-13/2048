import { FaArrowDown, FaArrowLeft, FaArrowRight, FaArrowUp } from "react-icons/fa";
import style from "./style.module.css";

interface Props {
  move: (arg: string) => void;
};

const Control = ({move}: Props) => {
    return (
        <div className={style.control}>
            <div>
                <button className={style.button} onClick={() => move("Up")}><FaArrowUp /></button>
            </div>
            <div className={style.controlCenter}>
                <button className={style.button} onClick={() => move("Left")}><FaArrowLeft /></button>
                <button className={`${style.button} ${style.buttonCenter}`} disabled></button>
                <button className={style.button} onClick={() => move("Right")}><FaArrowRight /></button>
            </div>
            <div>
                <button className={style.button} onClick={() => move("Down")}><FaArrowDown /></button>
            </div>
        </div>
    )
}

export default Control;