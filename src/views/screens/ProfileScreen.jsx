import React, { Component } from 'react'
import Axios from 'axios'
import { API_URL } from '../../constants/API'
import { connect } from "react-redux";
import {usernameInputHandler} from '../../redux/actions'

class ProfileScreen extends Component {
    state = {
        usersList: [],
        role: "",
        fullName: ""

    }
    componentDidMount() {
        Axios.get('http://localhost:3001/users', {
            params: {
                username: this.props.match.params.username
            }
        })
            .then((res) => {
                this.setState({ usersList: res.data })
                this.setState({
                    name: this.state.usersList[0].username,
                    fullName: this.state.usersList[0].fullName,
                    role: this.state.usersList[0].role
                })
                this.props.usernameInputHandler(this.state.name)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    getDataHandler = () => {
        //Request Get by Id
        //Idnya diletakkan setelah '/' milik nama table
        // Axios.get('http://localhost:3001/users/1')
        //     .then((res) => { //res = response dari API
        //         console.log(res.data)
        //         this.setState({ usersList: res.data })
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
        Axios.get('http://localhost:3001/users', {
            // query params
            params: {
                username: "seto",
                role: "user"

            }
        })
            .then((res) => { //res = response dari API
                console.log(res.data)
                // this.setState({ usersList: res.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    deleteDataHandler = () => {
        Axios.delete(`${API_URL}/users/1`)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    postDataHandler = () => {
        Axios.post(`${API_URL}/users`, {
            username: "bill",
            password: "12332",
            role: "admin",
            fullName: "Bill bil"
        })
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render() {
        return (
            <div className="container card p-4">
                <h1>Profile</h1>
                <h2>Welcome , {this.props.match.params.username}</h2>
                <h3>Role : {this.state.username} {this.state.role}</h3>
                <h3>Full Name :{this.state.username} {this.state.fullName}</h3>
                {/* <input
                    type="button"
                    className="btn btn-success"
                    value="Get data"
                    onClick={this.getDataHandler} />
                <input
                    type="button"
                    className="btn btn-danger"
                    value="Delete data"
                    onClick={this.deleteDataHandler} />
                <input
                    type="button"
                    className="btn btn-info"
                    value="Post data"
                    onClick={this.postDataHandler} /> */}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    //   user: state.user.namaUser,
    //   todo: state.haha.todoInput
    };
  };

export default connect(mapStateToProps,{usernameInputHandler})(ProfileScreen);
