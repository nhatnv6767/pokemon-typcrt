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

let student2: StudentDetail = {
    name: "NONNN",
    age: 20,
    address: "1111"
}

function App() {
    return (
        <div className="App">

        </div>
    );
}

export default App;
