import { useState } from "react";

function Temperature() {

    const [count, setCount] = useState(0);
    const [classB, setClassB] = useState('red');

    function updateClickCountBlue() {
        setCount(count - 1);

        if (count <= 0) {
            setClassB('blue');
        }
    }

    function updateClickCountRed() {
        setCount(count + 1);

        if (count > 0) {
            setClassB('red');
        }
    }

    return (
        <>
        <div className={classB}>{count} C</div>
        <div className="buttons">
            <button onClick={updateClickCountBlue} className="btnBlue">-1</button>
            <button onClick={updateClickCountRed} className="btnRed">+1</button>
        </div>
        </>
    )
}

export default Temperature;