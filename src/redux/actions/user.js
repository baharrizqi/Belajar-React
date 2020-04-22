import Axios from "axios"
import { API_URL } from "../../constants/API"
import swal from 'sweetalert'

export const usernameInputHandler = (text) => {
    return {
        type: "ON_CHANGE_USERNAME",
        payload: text,
    }
}

export const loginHandler = (userData) => {
    return (dispatch) => {
        const { username, password } = userData
        Axios.get(`${API_URL}/users`, {
            params: {
                username,
                password,
            }
        })
            .then(res => {
                if (res.data.length > 0) {
                    dispatch({
                        type: "ON_LOGIN_SUCCESS",
                        payload: res.data[0]
                    })
                } else {
                    swal("", "Username atau password salah", "error")
                    dispatch({
                        type: "ON_LOGIN_FAIL",
                        payload: "username atau password salah"
                    })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}


export const regisHandler = (userData) => {
    return (dispatch) => {
        const { username, password, role, fullName } = userData
        Axios.get(`${API_URL}/users`, {
            params: {
                username: username.toLowerCase(),
            }
        })
            .then(res => {
                if (res.data.length > 0) {
                    swal("", "username tidak boleh sama", "error")
                    dispatch({
                        type: "ON_REGIS_FAIL",
                    })
                } else {
                    Axios.post(`${API_URL}/users`, {
                        username: username.toLowerCase(),
                        password,
                        role,
                        fullName
                    })
                        .then((res) => {      
                            swal("", `Akun Anda telah terdaftar`, "success")
                            dispatch({
                                type : "ON_REGIS_SUCCESS",
                                payload : res.data
                            })
                           
                        })
                        .catch((err) => {
                            swal("Terjadi kelasahan di server")
                        })
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}