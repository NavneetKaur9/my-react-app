import React, { useState, useEffect } from 'react';

function App() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    // Declare multiple state variables!
    const [age, setAge] = useState(42);
    const [fruit, setFruit] = useState('banana');
    const [todos, setTodos] = useState([{ text: 'Learn Hooks' }, { text: 'Create custom Hooks' }]);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;
        //  If your effect returns a function, React will run it when it is time to clean up.
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
            <div>
                <h3> Todos:</h3> {todos.map(todo => (<div >{todo.text}</div>))} </div>
            <hr />
        </div>
    );
}

export default App;