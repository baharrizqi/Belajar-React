import React from 'react'
import {Link} from 'react-router-dom'

class InputScreen2 extends React.Component {
    state = {
        username: "",
        email: "",
        hitung: 0
    }
    inputHandler = (e, field) => {
        this.setState({ [field]: e.target.value })
    }
    render() {
        const { username, email,hitung } = this.state

        return (
            <div>
                <h1>Auth Screen</h1>
                <div className="container" style={{border: "1px solid black", width: "500px"}}>
                <h2 className="mt-4">Register</h2>
                <h3>Username : {username}</h3>
                <h3>Email :  {email}</h3>
                <input
                    onChange={(e) => this.inputHandler(e, "username")}
                    // onChange= {inputHandler}
                    type="text"
                    placeholder="Username" />
                    <br/>
                <input
                    onChange={(e) => this.inputHandler(e, "email")}
                    // onChange= {inputHandler}
                    type="text"
                    placeholder="Email" />
                    <br/>
                <textarea onChange={(e) => this.inputHandler(e, "hitung")} 
                name="" id="" cols="30" rows="10"></textarea>
                <span>{hitung.length}/140</span>
                <Link to={"/profile/"+ username}><input className="btn btn-primary" type="button" value="Submit"/></Link>
                </div>
            </div>
        )
    }
}

export default InputScreen2