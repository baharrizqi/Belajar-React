import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NavbarTemp extends Component {
    render() {
        return (
            <div className="d-flex justify-content-around align-items-center"
            style={{height: "80px"}}
            >
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/">&#128527;</Link>
            </div>
        )
    }
}
