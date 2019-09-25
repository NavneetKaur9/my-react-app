import * as classNames from 'classnames';
import React from 'react';
import { UserDetail } from './UserDetail';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UsersActions from '../actions/usersActions';
import PropTypes from 'prop-types';

class User extends React.Component {

    componentDidMount() {
        this.props.userActions.fetchUsers();
    }

    showUserDetail = (user) => {
        this.props.userActions.setUserDetail(user);
    }

    render() {
        console.log(this.props);
        let displayUsers = this.props.apiUserData.map(user => {

            return (

                <Card
                    key={user.id}
                    className={classNames("user user-card", {
                        'selected': user.id === (this.props.userDetail && this.props.userDetail.id)
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
                {this.props.userDetail && (
                    <UserDetail showUserDetailOf={this.props.userDetail} />
                )}
            </div>
        );
    }
}

User.propTypes = {
    userActions: PropTypes.object,
    apiUserData: PropTypes.array,
    userDetail: PropTypes.object
};

function mapStateToProps(state) {
    console.log("NNNNNN", state);
    return {
        apiUserData: state.users.apiUserData,
        userDetail: state.users.userDetail
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(UsersActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);

/*
    mapStateToProps will hydrate the props of your component from the state of the application.
    mapDispatchToProps ensures our actions have access to dispatch from redux.
*/
