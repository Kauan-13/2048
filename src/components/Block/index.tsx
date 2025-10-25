import style from "./style.module.css";

interface Props {
    value: number,
}

const Block = ({value}: Props) => {
    return <div className={`${style.block} ${style[`color-${value}`]}`}> {value} </div>
}

export default Block