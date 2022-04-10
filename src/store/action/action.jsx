import {database} from "../../firebase/firebase"

import { ref, onValue} from "firebase/database";


const getitems = () => {




    return (dispatch) => {
        console.log("chaklrhga");
        
        
        const starCountRef = ref(database, 'items/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data)


            dispatch( { type : "item" , payload: data} )


          

        });




 
     

    }







}


export {
    getitems
}