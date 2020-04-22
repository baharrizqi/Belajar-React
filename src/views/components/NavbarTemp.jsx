import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class NavbarTemp extends Component {
    render() {
        return (
            <div className="d-flex justify-content-around align-items-center"
                style={{ height: "80px" }}
            >
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/">&#128527;</Link>
                {this.props.todo.todoInput}
                {this.props.user}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todo: state.haha,
        user: state.user.username
    }
}

export default connect(mapStateToProps)(NavbarTemp)
