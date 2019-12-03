import React, { useState, useEffect } from 'react';

function App() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    // Declare multiple state variables!
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
    });

    useEffect(() => {
        return () => console.log("after effect", count);
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <div> Age: {age} </div>
            <div> Fruit: {fruit} </div>
            <div> Todos: {todos.map(todo => (<div >{todo.text}</div>))} </div>

        </div>
    );
}

export default App;