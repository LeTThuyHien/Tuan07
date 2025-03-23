import { useReducer } from "react";
import { useRef } from "react";
import './Hook.css'
const reduce = (state, action) => {
    switch (action.type) {
        case 'increment': return { ...state, count: state.count + 1 }
        case 'decrement': return { ...state, count: state.count - 1 }
        default: return state
    }
}

function Hook() {
    const [state, dispatch] = useReducer(reduce, { count: 0 })
    const inputRef = useRef(null);
    function handFocus() {
        if (inputRef.current) {
            inputRef.current.focus();
            console.log(inputRef.current.value);
        }
    }
    return (
        <>
            < div className="counter">
                <h3>Giá trị: {state.count} </h3>
                <div className="btn-group">
                    <button onClick={() => dispatch({ type: 'increment' })}>Tăng</button>
                    <button onClick={() => dispatch({ type: 'decrement' })}>Giảm</button>
                </div>

            </div >
            <div className="useRef">
                <h3>Connect input text</h3>
                <input className="input-text" ref={inputRef} type="text" />
                <div className="btn">
                    <button className="btn-click" onClick={handFocus}>Click</button>
                </div>
            </div>
        </>

    );
}

export default Hook;