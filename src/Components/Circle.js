import { useState } from "react";

const Circle = ({ circles }) => {
    const [selected, setSelected] = useState(true);

    return (

        <div onClick={() => setSelected(!selected)} className={selected ? 'yellow circleContainer' : 'red circleContainer'}></div>
    )
}

export default Circle;