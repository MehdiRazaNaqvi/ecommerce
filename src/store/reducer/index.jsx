const ini = {


}

export default (state = ini, action) => {
    switch (action.type) {
        case ("item1"):
            return { ...state, name1: action.payload.name, price1: action.payload.price, img1: action.payload.img }

        case ("item2"):
            return { ...state, name2: action.payload.name, price2: action.payload.price, img2: action.payload.img }



        case ("item3"):
            return { ...state, name3: action.payload.name, price3: action.payload.price, img3: action.payload.img }

        case ("item4"):
            return { ...state, name4: action.payload.name, price4: action.payload.price, img4: action.payload.img }


        case ("item5"):
            return { ...state, name5: action.payload.name, price5: action.payload.price, img5: action.payload.img }

        default:
            return state
    }
}
