import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UsersActions from '../actions/usersActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

class User extends React.Component {

    componentDidMount() {
        if (localStorage.getItem("usersList")) {
            this.props.userActions.setUsersList(JSON.parse(localStorage.getItem("usersList")));
        } {
            this.props.userActions.fetchUsers();
        }
    }

    showUserDetail = (user) => {
        this.props.userActions.setUserDetail(user);
    }

    onDelete = (id) => {
        let filteredUserList = this.props.userState.data.filter((user) => user.id != id);
        this.props.userActions.setUsersList(filteredUserList);
    }

    render() {
        let { match } = this.props;
        let displayUsers = this.props.userState.data.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                    <td>{user.address.street},{user.address.suite},{user.address.city}</td>
                    <td>{user.company.name}</td>
                    <td>
                        <Link to={`${match.url}/edit/${user.id}`} >
                            <Button variant="info">Edit</Button>
                        </Link>
                    </td>
                    <td>
                        <Button variant="danger" onClick={this.onDelete.bind(this, user.id)}>Delete</Button>
                    </td>
                </tr>
            );
        });

        return (
            <>
                <ButtonToolbar>
                    <Link to={`${match.url}/add`}>
                        <Button variant="primary">+ Add User</Button>
                    </Link>
                </ButtonToolbar>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                            <th>Address</th>
                            <th>Company</th>
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
