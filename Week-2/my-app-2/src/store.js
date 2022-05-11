import { useState } from "react";
//! Trash Icon from FontAwesome  (SVG Icons)
import { FaTrashAlt } from "react-icons/fa";

const Todos_2 = () => {
    const [items, setItems] = useState([
        {
            name: "Practice code",
            id: 20,
            description: "practice",
            checked: false,
        },
        { name: "Practice HTML", id: 21, description: "HTML", checked: true },
        { name: "Practice JS", id: 22, description: "JS", checked: false },
        { name: "Practice CSS", id: 23, description: "CSS", checked: false },
    ]);

    //!  Checkbox Handler
    const handleCheck = (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);
        // console.log(`key: ${id}`);
    };

    return (
        <header>
            <ul>
                {items.map((item) => (
                    <li className='item'>
                        <input
                            type='checkbox'
                            checked={item.checked}
                            onChange={() => handleCheck(item.id)}
                        />
                        <label>
                            ID:{item.id} Name: {item.name} Description:{" "}
                            {item.description}
                        </label>

                        <button>Edit</button>
                        <FaTrashAlt role='button' tabIndex='0' />
                    </li>
                ))}
            </ul>
        </header>
    );
};
export default Todos_2;

// //! First Todos Made
// const Todos_2 = () =>{
//     const [items, setItems] = useState( [
//         { text: "Practice code" },
//         { text: "Practice HTML" },
//         { text: "Practice JS" },
//         { text: "Practice CSS" },
//     ] );
// }
