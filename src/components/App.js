import React from 'react';
import User from './Users';
import Navbar from 'react-bootstrap/Navbar';
import './App.scss';

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        {' React Bootstrap - User App'}
                    </Navbar.Brand>
                </Navbar>
                <User />
            </div>
        );
    }
}

export default App;