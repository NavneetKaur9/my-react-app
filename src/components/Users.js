import * as classNames from 'classnames';
import React from 'react';
import { UserDetail } from './UserDetail';
import Card from 'react-bootstrap/Card';

export class User extends React.Component {

    constructor (props) {
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

                <Card
                    key={user.id}
                    className={classNames("user user-card", {
                        'selected': user.id === (this.state.userDetail && this.state.userDetail.id)
                    })}
                    onClick={() => this.showUserDetail(user)}>
                    <Card.Body>
                        <Card.Title className="user-card-name">{user.name} ({user.username})</Card.Title>
                        <Card.Subtitle className="mb-2 user-card-email">{user.email}</Card.Subtitle>
                        <Card.Text>
                            {user.phone}
                        </Card.Text>
                        <Card.Link className="user-card-website" href={user.website}>{user.website}</Card.Link>
                    </Card.Body>
                    <div className="arrow"></div>
                </Card>
            );
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