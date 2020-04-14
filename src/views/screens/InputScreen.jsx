import React from 'react'

class InputScreen extends React.Component {
    state = {
        username: "",
        password: "",
        repPassword: "",
        akun:[],
        userLogin: "",
        userPass: ""
    }

    render() {
        const { username, password, repPassword } = this.state
        const inputHandler = (e, field) => {
            this.setState({ [field]: e.target.value })
        }
        const usernameArr = username.toLowerCase()
        const passArr = password
        const repassArr = repPassword
        const objBaru = {
        'username':usernameArr, 
        'password':passArr, 
        'repPassword':repassArr}
        let arr = this.state.akun.concat(objBaru)

        const daftar = () => {
            if (passArr==repassArr) {                
                this.setState({akun:arr})
                document.getElementById("box1").value=``
                document.getElementById("box2").value=``
                document.getElementById("box3").value=``
            }
            else{
                alert("Password tidak sama Boosq")
            }
            document.getElementById("tulisan").innerHTML=``
        }
        const checkLogin =(e,field)=>{
            this.setState({ [field]: e.target.value })
        }

        const akunLogin =()=>{
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].username == this.state.userLogin && arr[i].password==this.state.userPass) {
                    document.getElementById("tulisan").innerHTML=`Welcome ${this.state.userLogin}`     
                    break               
                }
                else(
                    document.getElementById("tulisan").innerHTML=`username atau password anda salah`
                )
            }
        }

        return (
            <div>
                <h1>Auth Screen</h1>
                <div className="container" style={{ border: "1px solid black", width: "500px" }}>
                    <h2 className="mt-4">Register</h2>
                    <input
                        onChange={(e) => inputHandler(e, "username")}
                        className="form-control"
                        type="text"
                        id="box1"
                        placeholder="Username" />
                    <br />
                    <input
                        onChange={(e) => inputHandler(e, "password")}
                        className="form-control"
                        type="text"
                        id="box2"
                        placeholder="Password" />
                    <br />
                    <input
                        onChange={(e) => inputHandler(e, "repPassword")}
                        className="form-control"
                        type="text"
                        id="box3"
                        placeholder="Repeat Password" />
                    <br />
                    <input className="btn btn-primary" onClick={(e) => daftar(e)} style={{ width: "460px" }} type="submit" value="Register" />
                    <br /><br />
                </div>
                <br />
                <div className="container" style={{ border: "1px solid black", width: "500px" }}>
                    <h2 className="mt-4">Login</h2>
                    <input
                        onChange={(e) => checkLogin(e, "userLogin")}
                        className="form-control"
                        type="text"
                        placeholder="Username" />
                    <br />
                    <input
                        onChange={(e) => checkLogin(e, "userPass")}
                        className="form-control"
                        type="text"
                        placeholder="Password" />
                    <br />
                    <input className="btn btn-primary" onClick={(e)=>{akunLogin(e)}} style={{ width: "460px" }} type="button" value="Login" />
                    <br /><br />
                </div>
                <h4 id="tulisan"></h4>
            </div>
        )
    }
}

export default InputScreen