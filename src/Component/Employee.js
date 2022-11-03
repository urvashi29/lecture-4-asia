import React, { Component } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

export default class Employee extends Component {
    state = {
        users: [],
        loading: true
    }

    componentDidMount = () => {
        let url = 'https://jsonplaceholder.typicode.com/users';
        axios.get(url)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    users: res.data
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        // conditional rendering (ternary operator) 
        // (condition) ? () : ()
        const userList = (this.state.users.length) ? (this.state.users.map(user => {
            return (
                <React.Fragment key={user.id}>
                    <p><Link to={'/employee/' + user.id}>{user.name}</Link></p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </React.Fragment>
            )
        })) : (<ClipLoader
            color={'red'}
            loading={this.state.loading}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
        />)


        return (
            <>
                {userList}
            </>
        )
    }
}
