import { useReducer } from "react";
import './Hook.css'
const reduce = (state, action) => {
    switch (action.type) {
        case 'increment': return { ...state, count: state.count + 1 }
        case 'decrement': return { ...state, count: state.count - 1 }
        default: return state
    }
}
const inputRef = 

function Hook() {
    const [state, dispatch] = useReducer(reduce, { count: 0 })

    return (
        < div className="counter">
            <h3>Giá trị: {state.count} </h3>
            <div className="btn-group">
                <button onClick={() => dispatch({ type: 'increment' })}>Tăng</button>
                <button onClick={() => dispatch({ type: 'decrement' })}>Giảm</button>
            </div>

        </div >
    );
}

export default Hook;