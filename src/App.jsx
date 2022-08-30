import React, { useRef, useState } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { asyncIncrementActionCreator } from "./store/increment_reducer";


export function App(){
    const btnRef = useRef(null);
    const Count = useSelector((state) => (state.increment));
    const [countClicks, setCountClicks] = useState(0);

    const dispatch = useDispatch();
    
    function countHandler(){
        dispatch(asyncIncrementActionCreator())
    }

    function numberHandler(e){
        setCountClicks(Number(e.target.value))
    }

    function startClicking(){
        for(let i = 0; i < countClicks; i++){
            btnRef.current.click();
        }
    }

    return <div>
        <span>{Count}</span>

        <button ref={btnRef} onClick={countHandler}>+</button>
        <div>
            <input type="number" onChange={numberHandler} defaultValue={countClicks}/>
            <button onClick={startClicking}>Start Clicking</button>
        </div>
    </div>
}