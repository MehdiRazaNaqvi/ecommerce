import {database} from "../../firebase/firebase"

import { ref, onValue} from "firebase/database";


const getitems = () => {



    return (dispatch) => {
        console.log("chaklrhga");
        let i = 0;
        
        const starCountRef = ref(database, 'items/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data)

            {

            dispatch( { type : "item1" , payload: data.item1} )
            dispatch( { type : "item2" , payload: data.item2} )
            dispatch( { type : "item3" , payload: data.item3} )
            dispatch( { type : "item4" , payload: data.item4} )
            dispatch( { type : "item5" , payload: data.item5} )
            // dispatch( { type : "item6" , payload: data.item6} )
            // dispatch( { type : "item7" , payload: data.item7} )
            // dispatch( { type : "item8" , payload: data.item8} )
            // dispatch( { type : "item9" , payload: data.item9} )
            // dispatch( { type : "item10" , payload: data.item10} )
            // dispatch( { type : "item11" , payload: data.item11} )
            // dispatch( { type : "item12" , payload: data.item12} )
            // dispatch( { type : "item13" , payload: data.item13} )
            // dispatch( { type : "item14" , payload: data.item14} )
            // dispatch( { type : "item15" , payload: data.item15} )
            }

        });




 
     

    }




}


export {
    getitems
}