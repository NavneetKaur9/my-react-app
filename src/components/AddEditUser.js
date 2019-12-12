import React from 'react';
import Button from 'react-bootstrap/Button';

class AddEditUser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            username: "",
            email: "",
            phone: "",
            website: "",
            address: {
                street: "",
                suite: "",
                city: ""
            },
            company: {
                name: ""
            }
        };
    }

    componentDidMount() {
        let { params } = this.props.match;

        if (params.id) {
            let edituser = this.getUsersList().find(element => element.id == params.id);
            this.setState({
                ...edituser
            });
        }
    }

    getUsersList = () => {
        return JSON.parse(localStorage.getItem("usersList"));
    }

    setUsersList = (list) => {
        localStorage.setItem("usersList", JSON.stringify(list));
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { match } = this.props;
        let userList = this.getUsersList();
        let userIndex = userList.findIndex(user => user.id == this.props.match.params.id);

        if (userIndex !== -1 && match.params.id) {
            userList[userIndex] = {
                id: userList[userIndex].id,
                name: this.nameRef.value,
                username: this.usernameRef.value,
                email: this.emailRef.value,
                phone: this.phoneRef.value,
                website: this.websiteRef.value,
                address: {
                    street: this.streetRef.value,
                    suite: this.suiteRef.value,
                    city: this.cityRef.value
                },
                company: {
                    name: this.companyNameRef.value
                }
            }
        } else {
            userList.push({
                id: userList.length !== 0 ? (userList[userList.length - 1].id + 1) : 0,
                name: this.nameRef.value,
                username: this.usernameRef.value,
                email: this.emailRef.value,
                phone: this.phoneRef.value,
                website: this.websiteRef.value,
                address: {
                    street: this.streetRef.value,
                    suite: this.suiteRef.value,
                    city: this.cityRef.value
                },
                company: {
                    name: this.companyNameRef.value
                }
            });
        }

        this.setUsersList(userList);
        this.props.history.push("/users");
    }

    resetForm = () => {
        this.setState({
            name: "",
            username: "",
            email: "",
            phone: "",
            website: "",
            address: {
                street: "",
                suite: "",
                city: ""
            },
            company: {
                name: ""
            }
        });
    }

    render() {
        let { match } = this.props;

        return (
            <div>
                {match.url === "/users/add" ? (<h3>Add User</h3>) : (<h3>Edit User</h3>)}
                <form onSubmit={this.handleSubmit}>
                    <div >
                        <label>Name : </label>
                        <input placeholder="Enter Name" ref={ref => this.nameRef = ref} defaultValue={this.state.name} />
                    </div>

                    <div >
                        <label>Username : </label>
                        <input placeholder="Enter username" ref={ref => this.usernameRef = ref} defaultValue={this.state.username} />
                    </div>

                    <div >
                        <label>Email : </label>
                        <input type="email" placeholder="Enter email" ref={ref => this.emailRef = ref} defaultValue={this.state.email} />
                    </div>

                    <div >
                        <label>Phone : </label>
                        <input placeholder="Enter Phone" ref={ref => this.phoneRef = ref} defaultValue={this.state.phone} />
                    </div>

                    <div >
                        <label>Website : </label>
                        <input placeholder="Website" ref={ref => this.websiteRef = ref} defaultValue={this.state.website} />
                    </div>

                    <div >
                        <label>Address : </label>
                        <input placeholder="Enter street name" ref={ref => this.streetRef = ref} defaultValue={this.state.address.street} />
                        <input placeholder="Enter Suite" ref={ref => this.suiteRef = ref} defaultValue={this.state.address.suite} />
                        <input placeholder="Enter city" ref={ref => this.cityRef = ref} defaultValue={this.state.address.city} />
                    </div>

                    <div >
                        <label>Company Name : </label>
                        <input placeholder="Company Name" ref={ref => this.companyNameRef = ref} defaultValue={this.state.company.name} />
                    </div>

                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </form>
                <Button variant="primary" onClick={this.resetForm}>
                    Reset
                </Button>
            </div >
        )
    }
}

export default AddEditUser;