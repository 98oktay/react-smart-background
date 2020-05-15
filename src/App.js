import React from 'react';
import HeaderSlide from "./components/HeaderSlide";
import {games} from './data.json'

function App() {
    return (
        <div className="App">
            {games.map((game, key) => <HeaderSlide {...{game, key}}/>)}
        </div>
    );
}

export default App;
