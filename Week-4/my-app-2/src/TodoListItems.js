//! Import LineItem from LineItem.js
import LineItem from "./LineItem";

//! Todo List Items
const TodoListItems = ({ items, handleCheck, handleDelete }) => {
    return (
        <ul>
            {items.map((item) => (
                <LineItem
                    key={item.id}
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    );
};

export default TodoListItems;
