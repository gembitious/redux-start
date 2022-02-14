import { useRef } from "react";
import { addTodo } from "../redux/actions";
import useReduxDispatch from "../hooks/useReduxDispatch";
export default function TodoForm() {
    const inputRef = useRef();
    const dispatch = useReduxDispatch();
    return (
    <div>
        <input ref={inputRef} />
        <button onClick={click}>ADD</button >
    </div>
    );

    function click() {
        dispatch(addTodo(inputRef.current.value));
    }
}