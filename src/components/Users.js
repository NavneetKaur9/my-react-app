import * as classNames from 'classnames';
import React from 'react';
import { UserDetail } from './UserDetail';

export class User extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            apiUserData: [],
            userDetail: null
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

    showUserDetail = (user) => {
        this.setState({
            userDetail: user
        })
    }

    render() {
        let displayUsers = this.state.apiUserData.map(user => {

            return (
                <div
                    key={user.id}
                    className={classNames("user user-card", {
                        'selected': user.id === (this.state.userDetail && this.state.userDetail.id)
                    })}
                    onClick={() => this.showUserDetail(user)
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
                {this.state.userDetail && (
                    <UserDetail showUserDetailOf={this.state.userDetail} />
                )}
            </div>
        );
    }
}