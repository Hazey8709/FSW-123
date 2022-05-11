//! Trash Icon from FontAwesome  (SVG Icons)
import { FaTrashAlt } from "react-icons/fa";

//! Todo List Items
const TodoListItems = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {items.map((item) => (
                <li className='item'>
                    <input
                        type='checkbox'
                        checked={item.checked}
                        onChange={() => handleCheck(item.id)}
                    />
                    <label
                        style={
                            item.checked
                                ? { textDecoration: "line-through" }
                                : //? Come back and fix to turn red with line-through

                                  //?   { color: "red" }
                                  null
                        }
                        onDoubleClick={() => handleCheck(item.id)}>
                        ID:{item.id} Name: {item.name} Description:
                        {item.description}
                    </label>

                    <button>Edit</button>
                    <FaTrashAlt
                        onClick={() => handleDelete(item.id)}
                        role='button'
                        tabIndex='0'
                    />
                </li>
            ))}
        </ul>
    );
};

export default TodoListItems;
