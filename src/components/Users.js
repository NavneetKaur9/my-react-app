import React from 'react';
import * as classNames from 'classnames';

export class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiUserData: []
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

    render() {
        let displayUsers = this.state.apiUserData.map(user => {

            return (
                <div
                    key={user.id} 
                    className={classNames("user user-card", {
                        'selected': user.id === (this.state.showUserDetailOf && this.state.showUserDetailOf.id)
                    })} 
                    onClick={() => this.props.onClickShowUserDetail(user)
                }>
                    <div className="user user-card-name" >{user.name} ({user.username})</div>
                    <div className="user user-card-email">{user.email}</div>
                    <div className="user user-card-phone">{user.phone}</div>
                    <div className="user user-card-website">{user.website}</div>
                    <div className="arrow"></div>
                </div>);
        });

        return (
            <div className="App-container">
                {displayUsers}
            </div>
        );
    }
}