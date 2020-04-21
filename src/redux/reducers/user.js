const init_state = {
    id: 0,
    namaUser: "Dorayaki",
}
export default (state = init_state, action) => {
    if (action.type === "ON_CHANGE_USERNAME") {
        return { ...state, namaUser: action.payload };
    }
    return { ...state };
};
