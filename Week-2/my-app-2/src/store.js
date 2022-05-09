// const Todos = () =>
// {return (
//   [
//     { text: "Practice code" },
//     { text: "Practice HTML" },
//     { text: "Practice JS" },
//     { text: "Practice CSS" },
//   ])
// };

// export default Todos;

import { useState } from "react";

const Todos_2 = () => {
    const [items, setItems] = useState([
        { text: "Practice code" },
        { text: "Practice HTML" },
        { text: "Practice JS" },
        { text: "Practice CSS" },
    ]);

    return (
        <header>
            <ul>
                {items.map((item) => (
                    <li className='item'>
                        <input type='checkbox' checked={item.checked} />
                    <label>{item.text}</label>
                    <button>Delete</button>
                    <button>Edit</button>
                    </li>
                ))}
            </ul>
        </header>
    );
};
export default Todos_2;
