import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios'
import { API_URL } from '../../constants/API'
import swal from 'sweetalert'
import {Spinner} from 'reactstrap'
import {connect} from 'react-redux'
import {regisHandler} from '../../redux/actions'

class RegisterScreen extends Component {
    state = {
        username: "",
        password: "",
        role: "",
        fullName: "",
        isLoading: false,
    };
    inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value });
    };
    // postDataHandler = () => {
    //     const { password, username, role, fullName } = this.state;
    //     this.setState({ isLoading: true });
    //     setTimeout(() => {
    //     Axios.get(`${API_URL}/users`, {
    //         params: {
    //             username: username.toLowerCase(),

    //         }
    //     })
    //         .then((res) => {
    //             console.log(res)
    //             if (res.data.length >= 1) {
    //                 swal("","username tidak boleh sama","error")
    //                 this.setState({ isLoading: false });
    //             } else {
    //                 Axios.post(`${API_URL}/users`, {
    //                     username: username.toLowerCase(),
    //                     password,
    //                     role,
    //                     fullName
    //                 })
    //                 .then((res) =>{
    //                     this.setState({
    //                         username: "",
    //                         password: "",
    //                         role: "",
    //                         fullName: ""
    //                     });
    //                     swal("",`Akun Anda telah terdaftar`,"success")
    //                     this.setState({ isLoading: false });
    //                 })
    //                 .catch((err)=> {
    //                     swal("Terjadi kelasahan di server")
    //                     this.setState({ isLoading: false });
    //                 })
    //             }
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //             this.setState({ isLoading: false });
    //         })
    //     },1500)
    // }

    regisHandler = () => {
        const { password, username, role, fullName } = this.state;
        const userData = {
            username,
            password,
            role,
            fullName,
        }
        this.props.onRegister(userData)

    }
    render() {
        const {
            username,
            password,
            role,
            fullName,
        } = this.state;
        return (
            <div>
                <hr style={{backgroundColor: "red",height:"2px"}} />
                <center className="container">
                    <div className="card p-5" style={{ width: "400px" }}>
                        <h4>Register</h4>
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
                            value={role}
                            className="form-control mt-2"
                            type="text"
                            placeholder="Role"
                            onChange={(e) => this.inputHandler(e, "role")}
                        />
                        <input
                            value={fullName}
                            className="form-control mt-2"
                            type="text"
                            placeholder="Full Name"
                            onChange={(e) => this.inputHandler(e, "fullName")}
                        />
                        <input
                            type="button"
                            value="Register"
                            className="btn btn-primary mt-3"
                            onClick={this.regisHandler}
                            disabled={this.state.isLoading}
                        />
                        <h3>{this.props.user.username}</h3>
                        <h3>{this.props.user.errMsg}</h3>
                    </div>
                </center>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
    }
}
const mapDispatchToProps = {
    onRegister: regisHandler
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterScreen)