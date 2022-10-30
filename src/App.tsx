import React from 'react';
import './App.css';

type Student = {
    name: string,
    age: number,
};

interface Student2 {
    name: string,
    age: number,
}

let student: Student2 = {
    name: "nothing",
    age: 22,
}

function App() {
    return (
        <div className="App">

        </div>
    );
}

export default App;
