import React from 'react';
import './App.css';
import { UserDetail } from './UserDetail';
import { User } from './Users';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userDetail: {}
        }
    }

    showUserDetail = (user) => {
        this.setState({
            userDetail: user
        })
    }

    render() {
        return (
            <div className="App">
                <User onClickShowUserDetail={this.showUserDetail} />
                <UserDetail showUserDetailOf={this.state.userDetail} />
            </div>
        );
    }
}

export default App;