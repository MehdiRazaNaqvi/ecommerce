const ini = {
            data : {}

}

export default (state = ini, action) => {
    switch (action.type) {


        case ("item"):
            return { data: action.payload }


        default:
            return state
    }
}
