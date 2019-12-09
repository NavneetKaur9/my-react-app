import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UsersActions from '../actions/usersActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class User extends React.Component {

    componentDidMount() {
        this.props.userActions.fetchUsers();
    }

    showUserDetail = (user) => {
        this.props.userActions.setUserDetail(user);
    }

    onAdd = () => {
        // this.props.
    }

    render() {
        console.log(this.props);
        let displayUsers = this.props.userState.data.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>{user.address.street},{user.address.suite},{user.address.city}</td>
                    <td>
                        <Link to={
                            {
                                pathName: `/navneet/${user.id}`,
                                state: this.props.userState
                            }
                        }>
                            <Button variant="info">Edit</Button>
                        </Link>
                    </td>
                    <td>
                        <Button variant="danger">Delete</Button>
                    </td>
                </tr>
            );
        });

        return (
            <>
                <Button variant="primary" onClick={this.onAdd}>+ Add User</Button>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Address</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayUsers}
                    </tbody>
                </Table>
            </>
        );
    }
}

User.propTypes = {
    userActions: PropTypes.object,
    apiUserData: PropTypes.array,
    userDetail: PropTypes.object
};

function mapStateToProps(state) {
    console.log("state in Users Component", state);
    return {
        userState: state.users
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
