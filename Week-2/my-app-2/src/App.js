import "./App.css";
//! TodoList.js 
import TodoList from "./todoList";
import Header from "./header";
import Todos2 from "./Content";
import { useState } from "react";
import Footer from "./Footer";

function App()
{
    //! UseState  (item, setItems)
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
        //! Local Storage in todosStorage.json
        localStorage.setItem("todosStorage", JSON.stringify(listItems));
        // console.log(`key: ${id}`);
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
