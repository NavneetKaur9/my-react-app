import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UsersActions from '../actions/usersActions';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

                // <Card
                //     key={user.id}
                //     className={classNames("user user-card", {
                //         'selected': user.id === (this.props.userDetail && this.props.userDetail.id)
                //     })}
                //     onClick={() => this.showUserDetail(user)}>
                //     <Card.Body>
                //         <Card.Title className="user-card-name">{user.name} ({user.username})</Card.Title>
                //         <Card.Subtitle className="mb-2 user-card-email">{user.email}</Card.Subtitle>
                //         <Card.Text>
                //             {user.phone}
                //         </Card.Text>
                //         <Card.Link className="user-card-website" href={user.website}>{user.website}</Card.Link>
                //     </Card.Body>
                <div className="">
                    Name: {user.name} ({user.username})
                        <br />
                    Email: {user.email}
                    <br />
                    Phone:  {user.phone}
                    <br />
                    website: {user.website}
                    <br />
                    <Link to={`/user/${user.id}`}>See details</Link>
                    {/* <Link to="/usersDetails">See details</Link> */}

                    <hr />
                </div>
                // </Card>
            );
        });

        return (
            <div className="App-container">
                {displayUsers}
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
