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

        case ("item6"):
            return { ...state, name6: action.payload.name, price6: action.payload.price, img6: action.payload.img }

        case ("item7"):
            return { ...state, name7: action.payload.name, price7: action.payload.price, img7: action.payload.img }


        case ("item8"):
            return { ...state, name8: action.payload.name, price8: action.payload.price, img8: action.payload.img }

        case ("item9"):
            return { ...state, name9: action.payload.name, price9: action.payload.price, img9: action.payload.img }

        case ("item10"):
            return { ...state, name10: action.payload.name, price10: action.payload.price, img10: action.payload.img }

        case ("item11"):
            return { ...state, name11: action.payload.name, price11: action.payload.price, img11: action.payload.img }

        case ("item12"):
            return { ...state, name12: action.payload.name, price12: action.payload.price, img12: action.payload.img }

        case ("item13"):
            return { ...state, name13: action.payload.name, price13: action.payload.price, img13: action.payload.img }

        case ("item14"):
            return { ...state, name14: action.payload.name, price14: action.payload.price, img14: action.payload.img }

        case ("item15"):
            return { ...state, name15: action.payload.name, price15: action.payload.price, img15: action.payload.img }

        default:
            return state
    }
}
