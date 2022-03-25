
import { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';




import { getitems } from "./store/action/action"

function App(props) {

  const [lightmode, setmode] = useState(true)



  return (

    <div className={lightmode? "parent" : "parent dark"}>

 
      <div className="left" > </div>



      <div className="center">

        <div className="search">

          <form>
            <div className="form-row align-items-center">
              <div className="col-auto my-1">

                <select onChange={() => { setmode(!lightmode); console.log(lightmode) }} className="custom-select mr-sm-2" id="inlineFormCustomSelect">

                  <option defaultChecked value="1">Light</option>
                  <option value="2">Dark</option>

                </select>
              </div>

            </div>
          </form>

        </div>



        <div className="main">

          <span>


            <div className="card">

              <img src={props.img1} className="card-img" />
              <div className="card-img-overlay">
                <h6 className="card-title">{props.name1}</h6>
                <h6 className='price'>Rs. {props.price1}</h6>
              </div>
            </div>

          </span>



          <span>

            <div className="card">
              <img src={props.img2} className="card-img" />
              <div className="card-img-overlay">
                <h6 className="card-title">{props.name2}</h6>
                <h6 className='price'>Rs. {props.price2}</h6>
              </div>
            </div>

          </span>


          <span>

            <div className="card">
              <img src={props.img3} className="card-img" />
              <div className="card-img-overlay">
                <h6 className="card-title">{props.name3}</h6>
                <h6 className='price'>Rs. {props.price3}</h6>
              </div>
            </div>

          </span>

          <span>

            <div className="card">
              <img src={props.img4} className="card-img" />
              <div className="card-img-overlay">
                <h6 className="card-title">{props.name4}</h6>
                <h6 className='price'>Rs. {props.price4}</h6>
              </div>
            </div>

          </span>

          <span>

            <div className="card">
              <img src={props.img5} className="card-img" />
              <div className="card-img-overlay">
                <h6 className="card-title">{props.name5}</h6>
                <h6 className='price'>Rs. {props.price5}</h6>
              </div>
            </div>

          </span>

          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>


      </div>


      <div class="right">
        <button onClick={() => {


          props.getitems()

        }}  >Get Items</button>
      </div> 

    </div>

  );
}


const mapStateToProps = (state) => ({
  name1: state.name1,
  price1: state.price1,
  img1: state.img1,

  name2: state.name2,
  price2: state.price2,
  img2: state.img2,

  name3: state.name3,
  price3: state.price3,
  img3: state.img3,

  name4: state.name4,
  price4: state.price4,
  img4: state.img4,

  name5: state.name5,
  price5: state.price5,
  img5: state.img5,
})


const mapDispatchToProps = (dispatch) => ({
  getitems: () => dispatch(getitems())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)



