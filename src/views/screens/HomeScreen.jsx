import React, { Component } from 'react'
import {connect} from 'react-redux'

class HomeScreen extends Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    <h1>Welcome ! ini Home Screen</h1>
                    {this.props.todo.todoInput}
                    {this.props.haloDunia}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        todo: state.haha,
        haloDunia: state.haha.todoInput,
    }
}

export default connect(mapStateToProps)(HomeScreen)