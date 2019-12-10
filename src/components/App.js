import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

class App extends React.Component {

    render() {
        return (
            <div>
                App Component
                <h3>
                    <Link to="/users">Users</Link>
                </h3>
            </div>
        );
    }
}

export default App;