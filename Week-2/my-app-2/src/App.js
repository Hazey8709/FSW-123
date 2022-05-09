import logo from "./logo.svg";
import "./App.css";
import TodoList from "./todoList";
import { Todos } from "./store";

function App() {
    return (
        <div className='App'>
            <TodoList />
            {/* <Todos /> */}
        </div>
    );
}

export default App;
