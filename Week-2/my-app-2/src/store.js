//! Trash Icon from FontAwesome  (SVG Icons)
import { FaTrashAlt } from "react-icons/fa";

const Todos2 = ({ items, handleCheck, handleDelete }) => {
    return (
        <header>
            {/*//! Empty List (Saying Empty) */}
            {items.length ? (
                <main>
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
                </main>
            ) : (
                <h1 style={{ margin: "5px" }}>Your List is EMPTY!</h1>
            )}
        </header>
    );
};
export default Todos2;

// //! First Todos Made
// const Todos_2 = () =>{
//     const [items, setItems] = useState( [
//         { text: "Practice code" },
//         { text: "Practice HTML" },
//         { text: "Practice JS" },
//         { text: "Practice CSS" },
//     ] );
// }
