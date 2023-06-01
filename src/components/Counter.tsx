import {useState} from "react";
import classes from './counter.module.scss'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const increment = () => {
      setCounter(counter+1)
    }


    return (
        <div>
            <div>{counter}</div>
            <button onClick={increment} className={classes.btn}>click</button>
        </div>
    );
};

export default Counter;
