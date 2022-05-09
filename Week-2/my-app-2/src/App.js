import logo from "./logo.svg";
import "./App.css";
import TodoList from "./todoList";
import  Todos  from "./store";
import Todos_2 from "./store";

function App() {
    return (
        <div className='App'>
            <TodoList />

            <Todos_2 />

        </div>
    );
}

export default App;
