import React from "react";
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios'
import { API_URL } from '../../constants/API'


class AuthScreen extends React.Component {
  state = {
    username: "",
    password: "",
    repPassword: "",
    role: "",
    fullName: "",
    isLoggedIn: false,
    users: [],
    loginUsername: "",
    loginPassword: "",
    currentUsername: "",
    activeEditIdx: null,
  };

  inputHandler = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  registerHandler = () => {
    const { repPassword, password, username, users } = this.state;
    if (repPassword == password) {
      let newData = {
        username,
        password,
      };

      this.setState({
        users: [...users, newData],
        username: "",
        password: "",
        repPassword: "",
      });

      console.log(users);
    } else {
      alert("Password belum cocok");
    }
  };

  loginHandler = () => {
    const { loginUsername, loginPassword, users } = this.state;
    for (let i = 0; i < users.length; i++) {
      if (
        users[i].username == loginUsername &&
        users[i].password == loginPassword
      ) {
        this.setState({
          isLoggedIn: true,
          currentUsername: users[i].username,
          loginUsername: "",
          loginPassword: "",
        });
        break;
      }

      if (i == users.length - 1) {
        alert("User tidak ada atau password salah");
      }
    }
  };

  postDataHandler = () => {
    const { repPassword, password, username, users, role, fullName } = this.state;
    Axios.get(`${API_URL}/users`, {
      params: {
        username : username.toLowerCase(),
        
      }
    })
      .then((res) => {
        console.log(res)
        if (res.data.length >= 1 ) {
          alert("username tidak boleh sama")
        } else {
          Axios.post(`${API_URL}/users`,{
            username : username.toLowerCase(),
            password,
            role,
            fullName
          })
          this.setState({
            username: "",
            password: "",
            repPassword: "",
            role: "",
            fullName: ""
          });
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  getDataHandler = () => {
    const { repPassword, password, username, users, role, fullName, isLoggedIn } = this.state;
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
        username: username.toLowerCase(),
        password: password
      }
    })
      .then((res) => { //res = response dari API
        console.log(res)
        if (res.data.length >= 1) {
          this.setState({
            isLoggedIn: true,
          })
        }else{
          alert("password salah")
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  deleteHandler = (idx) => {
    const { users } = this.state;
    let temp = [...users];

    temp.splice(idx, 1);

    this.setState({ users: temp });
  };

  renderUsers = () => {
    const { users, activeEditIdx } = this.state;
    return users.map((val, idx) => {
      if (idx == activeEditIdx) {
        return (
          <tr>
            <td>{idx + 1}</td>
            {/* <td>{val.username}</td> */}
            <td>
              <input type="text" placeholder={val.username} />
            </td>
            <td>
              <input
                type="button"
                value="Delete"
                className="btn btn-danger"
                onClick={() => this.deleteHandler(idx)}
              />
            </td>
          </tr>
        );
      } else {
        return (
          <tr>
            <td>{idx + 1}</td>
            <td>{val.username}</td>
            <td colSpan="2">
              <input
                type="button"
                value="Edit"
                className="btn btn-info"
                onClick={() => this.setState({ activeEditIdx: idx })}
              />
              <Link to={"/profile/" + val.username}><input
                type="button"
                value="Login"
                className="btn btn-primary"
              />
              </Link>
            </td>
          </tr>
        );
      }
    });
  };

  render() {
    const {
      username,
      password,
      repPassword,
      role,
      fullName,
      isLoggedIn,
      users,
      currentUsername,
      activeEditIdx,
      loginPassword,
      loginUsername,
    } = this.state;

    if (!isLoggedIn) {
      return (
        <div>
          <hr />
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
                value={repPassword}
                className="form-control mt-2"
                type="text"
                placeholder="Repeat Password"
                onChange={(e) => this.inputHandler(e, "repPassword")}
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
                onClick={this.postDataHandler}
              />
            </div>
            {/* <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Username</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>{this.renderUsers()}</tbody>
            </table> */}
            <div className="card p-5" style={{ width: "400px" }}>
              <h4>Login</h4>
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
                onClick={this.getDataHandler}
              />
            </div>
            {isLoggedIn ? <h2>Welcome {currentUsername}</h2> : null}
          </center>
        </div>
      );
    } else {
      return <Redirect to={`/profile/${username}`} />
    }
  }
}

export default AuthScreen;