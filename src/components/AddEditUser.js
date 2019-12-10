import React from 'react';
// import { Link, Route } from "react-router-dom";

class AddEditUser extends React.Component {
    render() {
        let { match } = this.props;
        console.log("inside add Edit user", this.props);

        return (
            <div>
                {match.url == "/users/add" ? (<h3>Add User</h3>) : (<h3>Edit User</h3>)}
                {/* Form */}
                <form>
                    <label>
                        Name: <input type="text" name="name" />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default AddEditUser;