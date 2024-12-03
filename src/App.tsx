import React from 'react';
import './App.css';
import TopPart from "./page/TopPart";
import Discover from "./page/Discover";
import MiddlePart from './page/MiddlePart';
import FeedBack from './page/FeedBack';

function App() {
    return (
        <div>
            <TopPart/>
            <Discover/>
            <MiddlePart/>
            <FeedBack/>
        </div>
    );
}

export default App;
