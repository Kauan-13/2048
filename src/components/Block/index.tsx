import style from "./style.module.css";

interface Props {
    value: number,
}

const Block = ({value}: Props) => {
    return <div className={style.block}> {value} </div>
}

export default Block