import React from 'react';
import * as classNames from 'classnames';   
import './App.css';
import { UserDetail } from './UserDetail';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            apiUserData: [],
            showUserDetailOf: {}
        }

    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {

                if (response.status !== 200) {
                    return;
                }

                response.json().then(responseBody => {
                    this.setState({
                        apiUserData: responseBody
                    });
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    showDetail=user=> {
        this.setState({
            showUserDetailOf: user
        })
    }

    render() {
        let displayUsers = this.state.apiUserData.map(user => {
            return (
                <div key={user.id} className={classNames("user user-card",{
                    'selected': user.id === (this.state.showUserDetailOf && this.state.showUserDetailOf.id)
                })} onClick={() => this.showDetail(user)}>
                    <div className="user user-card-name" >{user.name} ({user.username})</div>
                    <div className="user user-card-email">{user.email}</div>
                    <div className="user user-card-phone">{user.phone}</div>
                    <div className="user user-card-website">{user.website}</div>
                    <div className="arrow"></div>
                </div>);
        });

        return (
            <div className="App">
                <div className="App-container">
                    {displayUsers}
                </div>
                <UserDetail showUserDetailOf={this.state.showUserDetailOf} />
            </div>
        );
    }
}

export default App;