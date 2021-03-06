const init_state = {
    id: 0,
    username: "",
    fullName: "",
    role: "",
    testing: "",
    testing2: "",
    errMsg: "",
}
export default (state = init_state, action) => {
    if (action.type === "ON_CHANGE_USERNAME") {
        return { ...state, username: action.payload };
    } else if (action.type === "ON_LOGIN_SUCCESS") {
        const { username, fullName, role, id} = action.payload
        //value dan properti menggunakan nama yang sama username: username
        return {
            ...state,
            username,
            fullName,
            role,
            id,
        }
    } else if (action.type === "ON_LOGIN_FAIL") {
        return { ...state, errMsg: action.payload }
    } else if (action.type === "ON_REGIS_SUCCESS") {
        const { username, fullName, password, role, id } = action.payload
        return {
            ...state,
            username,
            fullName,
            password,
            role,
            id
        }
    } else if (action.type === "ON_REGIS_FAIL"){
        return { ...state, errMsg: "username tidak boleh sama" }
    } else if(action.type === "ON_LOGOUT_SUCCESS"){
        const { username, fullName, password, role, id } = action.payload
        return {...state, username , fullName,password,role,id }
    }
    return { ...state };
};
