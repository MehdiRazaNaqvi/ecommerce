import { useNavigate, useParams } from "react-router-dom"
import { connect } from 'react-redux';
import "./details.css"

const Details = (props) => {

    
    
    const { name } = useParams()
    // console.log(name)
    let navigate = useNavigate()


    let product = Object.values(props.state)
    
    let item = {};


    { product.map((v) => { if (v.name == name) { item = v } }) }
    // console.log(item)




    return (


        <div className={props.darktheme ? "one dark" : "one"} >

            <div className="pic" >  <img className="details_img" src={item.img} /> </div>

            <div className="content">
                <div className="itemm"> <h1>{item.name}</h1> </div>
                {/* <div className="itemm"> <h4>{product.des}</h4> </div> */}
                <div className="itemm"> <h3>Select Color</h3> <div className="pallette"> <div className="color color1"></div> <div className="color color2"></div><div className="color color3"></div><div className="color color4"></div> </div> </div>
                <div className="itemm"> <h2>Rs. {item.price}</h2> </div>
                <div className="itemm item_last"> <button className="btn btn-outline-success" >Add to cart</button> <button onClick={() => navigate("/ecommerce")} className={props.darktheme? "btn btn-outline-light" : "btn btn-outline-dark"} >Back to Mart</button> </div>
            </div>


        </div>
    )






}


const mapStateToProps = (state) => ({
    state: state.data,
    darktheme: state.darktheme
})

export default connect(mapStateToProps, null)(Details)