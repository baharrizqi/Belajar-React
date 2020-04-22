import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios'
import { connect } from 'react-redux'
import { API_URL } from '../../constants/API'
import { loginHandler } from '../../redux/actions'
import swal from 'sweetalert'

class LoginScreen extends Component {
    state = {
        username: "",
        password: "",
        role: "",
        fullName: "",
        isLoggedIn: false,
    }
    inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value });
    };

    loginHandler = () => {
        const { username, password } = this.state
        const userData = {
            username,
            password,
        }
        this.props.onLogin(userData)
    }
    // getDataHandler = () => {
    //     const { password, username, isLoggedIn } = this.state;
    //     Axios.get('http://localhost:3001/users', {
    //         // query params
    //         params: {
    //             username: username.toLowerCase(),
    //             password: password
    //         }
    //     })
    //         .then((res) => { //res = response dari API
    //             console.log(res)
    //             if (res.data.length >= 1) {
    //                 this.setState({
    //                     isLoggedIn: true,
    //                 })
    //             } else {
    //                 alert("password salah")
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    render() {
        const { username, password, isLoggedIn } = this.state
        if (!isLoggedIn) {
            return (
                <div>
                    <center>
                        <hr style={{ backgroundColor: "red", height: "2px" }} />
                        <div className="card p-5" style={{ width: "400px" }}>
                            <h4>Login</h4>
                            <p>username: {this.props.user.username}</p>
                            <p>{this.props.user.errMsg}</p>
                            <input
                                value={username}
                                className="form-control mt-2"
                                type="text"
                                placeholder="Username"
                                onChange={(e) => this.inputHandler(e, "username")}
                            />
                            <input
                                value={password}
                                className="form-control mt-2"
                                type="text"
                                placeholder="Password"
                                onChange={(e) => this.inputHandler(e, "password")}
                            />
                            <input
                                type="button"
                                value="Login"
                                className="btn btn-primary mt-3"
                                onClick={this.loginHandler}
                            />
                        </div>
                    </center>
                </div>
            )
        } else {
            return <Redirect to={"/profile/" + username} />
        }
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}
const mapDispatchToProps = {
    onLogin: loginHandler
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)