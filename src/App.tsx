import React from 'react';
import './App.css';

type Name = {
    name: string
}

type StudentDetail = Name & {
    age: number,
    address: string
}
let student: Name = {
    name: "Not"
}

function App() {
    return (
        <div className="App">

        </div>
    );
}

export default App;
