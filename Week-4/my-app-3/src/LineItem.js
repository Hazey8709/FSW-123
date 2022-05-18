//! Trash Icon from FontAwesome  (SVG Icons)
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className='item'>
            <input
                type='checkbox'
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
            />
            <label
                style={
                    item.checked ? { textDecoration: "line-through" } : null

                    //? Come back and fix to turn red with line-through
                    //?   { color: "red" }
                }
                onDoubleClick={() => handleCheck(item.id)}>
                {/* ID:{item.id} */}
                Name: {item.name}
                Description: {item.description}
            </label>

            <button>Edit</button>
            <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role='button'
                tabIndex='0'
                aria-label={`Delete ${item.item}`}
            />
        </li>
    );
};

export default LineItem;
