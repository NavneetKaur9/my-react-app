import React from 'react';
import { User } from './Users';
import './App.scss';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <User />
            </div>
        );
    }
}

export default App;