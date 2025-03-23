import { useRef, useState } from "react";
import "./Bai2.css";
function Bai2() {
    const [todos, setTodo] = useState([]); // mảng lưu danh sách công việc
    const inputRef = useRef(null);
    const handClickAdd = () => {
        const inputValue = inputRef.current.value.trim(); // lấy giá trị từ input
        if (inputValue) {  // nếu có giá trị thì thêm vào mảng
            setTodo((preTodo) => {
                return [...preTodo, inputValue]; 
            });
        }
        inputRef.current.value = ""; // xóa giá trị input

    }
    const handDelete = (index) => {
        setTodo((preTodo) => {
            return preTodo.filter((todo, i) => i !== index);
        });
        console.log(index);
    }
    const handUpdate = (index) => {
        inputRef.current.value = todos[index];
        setTodo((preTodo) => {
            return preTodo.filter((todo, i) => i !== index);
        });
    }
    return (
        <div className="todo">
            <h3>Thêm danh sách công việc</h3>
            <div className="list">
                <input className="input-todo" ref={inputRef} type="text" placeholder="congviec" />
                <button onClick={handClickAdd} className="btn-add">Thêm</button>
            </div>
            <ul className="list-todo">
                {todos.map((todo, index) => (
                    <li key={index}>
                        <a href="">{todo}</a>
                        <div className="btn-edit-delete">
                            <button className="btn-edit" onClick={()=> handUpdate(index)}>Sửa</button>
                            <button className="btn-delete" onClick={() => handDelete(index)}>Xóa</button>
                        </div>
                    </li>

                ))}
            </ul>
        </div>
    );
}

export default Bai2;