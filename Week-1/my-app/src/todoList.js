const TodoList = () => {
    return (
        <ul>
            <h2>List of Todos</h2>
            <li>
                <input type='checkbox' id='td-1' />
                <label for='todo-1'>Go To Gym</label>
            </li>
            <li>
                <input type='checkbox' id='td-2' />
                <label for='td-2'>Do Laundry</label>
            </li>
            <li>
                <input type='checkbox' id='td-3' />
                <label for='td-3'>Food Shopping</label>
            </li>
            <li>
                <input type='checkbox' id='td-4' />
                <label for='td-4'>Do Homework</label>
            </li>
        </ul>
    );
};

export default TodoList;
