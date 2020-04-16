import React, { Component } from 'react'

export default class ProfileScreen extends Component {
    render() {
        return (
            <div>
                <h1>Profile</h1>
                <h2>Welcome , {this.props.match.params.username}</h2>
            </div>
        )
    }
}
