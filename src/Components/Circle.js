import { useState } from "react";

const Circle = () => {
    const [state, setState] = useState(true);

    return (
        <div onClick={() => setState(!state)} className={state ? 'yellow circleContainer' : 'red circleContainer'}><span className="circle"></span></div>
    );
}

export default Circle;