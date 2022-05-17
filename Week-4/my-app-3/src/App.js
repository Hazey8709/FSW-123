import "./App.css";
//! TodoList.js (not called!)
import TodoList from "./todoList";
import Header from "./header";
import Todos2 from "./Content";
import Footer from "./Footer";
import { useState } from "react";

const { v4: uuidv4 } = require("uuid");
console.log(uuidv4());

function App() {
    //! UseState  (items, setItems) - (array)
    const [items, setItems] = useState([
        {
            name: "Practice code ",
            id: uuidv4(),
            description: "practice ",
            checked: false,
        },
        {
            name: "Practice HTML ",
            id: uuidv4(),
            description: "HTML ",
            checked: true,
        },
        {
            name: "Practice JS ",
            id: uuidv4(),
            description: "JS ",
            checked: false,
        },
        {
            name: "Practice CSS ",
            id: uuidv4(),
            description: "CSS ",
            checked: false,
        },
    ]);

    //!  Checkbox Handler
    const handleCheck = (id) => {
        const listItems = items.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(listItems);
        //! Local Storage in todosStorage.json
        localStorage.setItem("todosStorage", JSON.stringify(listItems));
    };

    //! Delete Handler
    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        //! Local Storage in todosStorage.json
        localStorage.setItem("todosStorage", JSON.stringify(listItems));
        // console.log(id);
    };

    return (
        <div className='App'>
            <Header title='Todo List' />
            {/* <TodoList /> */}
            <Todos2
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
            <Footer length={items.length} />
        </div>
    );
}

export default App;
