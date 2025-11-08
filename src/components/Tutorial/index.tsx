import style from "./style.module.css";
import fonts from "../../styles/fonts.module.css";
import { IoCloseOutline } from "react-icons/io5";

interface Props {
    close: () => void;
}

const Tutorial = ({close}: Props) => {
    return (
        <div className={`${style.tutorial} ${fonts.poppinsRegular}`}>
            <h2>Como jogar 2048</h2>
            <div>
                <h3>Objetivo do jogo:</h3>
                <p>Combine blocos de mesmo número até criar o bloco 2048!</p>
                <p>Após cada movimento, um novo bloco aparece em uma posição aleatória.</p>
                <p>O jogo termina quando não há mais movimentos possíveis.</p>
                <p>Todos os blocos deslizam na direção escolhida até baterem em outro bloco ou na borda.</p>
            </div>
            <div className={style.controllers}>
                <h3>Controles:</h3>
                <img src="./controlers.svg" alt="" />
            </div>
            <button className={style.closeButton} onClick={() => {close()}}><IoCloseOutline className={style.closeIcon}/> Fechar</button>
        </div>
    )    
}

export default Tutorial;