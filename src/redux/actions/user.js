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
        const {username,password} = userData
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
                }else{
                    swal("","Username atau password salah","error")
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