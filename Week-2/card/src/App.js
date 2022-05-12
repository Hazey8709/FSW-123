//! First Way  (color issue)
import "./App.css";
import Card from "./card";

function App() {
    return (
        <div className='wrapper'>
            <Card
                title='Title-1'
                subTitle='Sub Title-1'
                description='Hello World-1'
                // bgColor={{ backgroundColor: "blue" }}
            />
            <Card
                title='Title-2'
                subTitle='Sub Title-2'
                description='Hello World-2'
            />
            <Card
                title='Title-3'
                subTitle='Sub Title-3'
                description='Hello World-3'
            />
            <Card
                title='Title-4'
                subTitle='Sub Title-4'
                description='Hello World-4'
            />
        </div>
    );
}

export default App;

// //!  Second Way With colors changed
// import logo from "./logo.svg";
// import "./App.css";
// import Card from "./card";

// function App() {
//     return (
//         <div className='wrapper'>
//             <Card/>
//         </div>
//     );
// }

// export default App;
