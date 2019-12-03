import React from 'react';
import { Link } from "react-router-dom";
import './App.scss';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                This is app Component
               <ul>
                    <li>
                        <Link to="/users">User</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                    <li>
                        <Link to="/category">Category</Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default App;