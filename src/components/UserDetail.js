import React from "react";
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as UsersActions from '../actions/usersActions';

class UserDetail extends React.Component {

    displayChildKeys = (data) => {
        let dataKeys = !data ? [] : Object.keys(data);

        return dataKeys.map(key => {

            if (typeof data[key] == "object") {
                return this.displayChildKeys(data[key]);
            } else {
                return (
                    <div >
                        <b>{key}-</b> <span>{(data[key])}</span>
                    </div>
                )
            }

        })
    }

    render() {
        console.log("props inside userdetail page",this.props);

        return (
            <div>
                <div className="sidebar">
                    user detail page 
                    {/* Name : {this.props.showUserDetailOf.name}
                    <br />
                    UserName : {this.props.showUserDetailOf.username}
                    <br />
                    Email: {this.props.showUserDetailOf.email}
                    <br />
                    Address: <div className="address-wrapper">
                        {this.displayChildKeys(this.props.showUserDetailOf.address)}
                    </div>
                    <br />
                    Phone: {this.props.showUserDetailOf.phone}
                    <br />
                    Website: {this.props.showUserDetailOf.website}
                    <br />
                    Company:<div className="company-wrapper">
                        {this.displayChildKeys(this.props.showUserDetailOf.company)}
                    </div> */}
                </div>
            </div>
        )
    }
}

function mapStateToProps (state){
    return{
        userData: state.users.apiUserData
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
)(UserDetail);