import TodoListItems from "./TodoListItems";

const Todos2 = ({ items, handleCheck, handleDelete }) => {
    return (
        <header>
            {/*//! Empty List (Saying Empty) */}
            {items.length ? (
                <>
                    <TodoListItems
                        items={items}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                    />
                    <p>&copy; 2022, Jordan Fortin</p>
                </>
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
