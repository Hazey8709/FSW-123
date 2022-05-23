import "./App.css";
import { useState, useEffect } from "react";

function App() {
    const [gif, setGif] = useState("");

    const initialSearch = "Doja Cat";

    const getGif = (findGif = initialSearch) => {
        console.log(findGif);

        const API = "iejSmIvbU3kYcuiWqyDWd3XM4XYsk0Uw";
        const URL = `https://api.giphy.com/v1/gifs/search?q=${findGif}&api_key=${API}`;

        fetch(URL)
            .then((res) => res.json())
            .then((data) =>
                setGif(data.data[0].images.fixed_height_downsampled.url)
            )
            .catch((error) => console.log(error));
    };

    const handleForm = (e) => {
        e.preventDefault();
        console.log(e.target.search.value);
        getGif(e.target.search.value);
    };

    useEffect(getGif, []);

    return (
        <div className='div-style'>
            <form className='form-style' onSubmit={handleForm}>
                <input className='input-box' type='text' name='search' />
                <button className='btn-style' type='submit'>
                    {" "}
                    Find Pic{" "}
                </button>
            </form>
            <img className='pic-style' src={gif} alt='' />
        </div>
    );
}

export default App;
