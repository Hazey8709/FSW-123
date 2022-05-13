//! First Way  (color issue)
import "./App.css";
import Card from "./card";

function App() {

    return (
        <div className='wrapper'>
            <div>
                <Card
                    title='Title-1'
                    subTitle='Sub Title-1'
                    description='Hello World-1'
                    backgroundColor='red'
                    width='100px'
                />
            </div>

            <div>
                <Card
                    title='Title-2'
                    subTitle='Sub Title-2'
                    description='Hello World-2'
                    backgroundColor='orange'
                    width='100px'
                />
            </div>

            <div>
                <Card
                    title='Title-3'
                    subTitle='Sub Title-3'
                    description='Hello World-3'
                    backgroundColor='yellow'
                    width='100px'
                />
            </div>

            <div>
                <Card
                    title='Title-4'
                    subTitle='Sub Title-4'
                    description='Hello World-4'
                    backgroundColor='green'
                    width='100px'
                />
            </div>
        </div>
    );
}

export default App;

// //!  Second Way With (colors changed in card.js by className)
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
