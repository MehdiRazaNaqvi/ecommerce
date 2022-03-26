
import { useState } from 'react';
import { connect } from 'react-redux';
import './App.css';




import { getitems } from "./store/action/action"

function App(props) {

  const [lightmode, setmode] = useState(true)



  return (

    <div className={lightmode ? "parent" : "parent dark"}>


      <div className="left" >



        <form>
          <div className="form-row align-items-center">
            <div className="col-auto my-1">

              <select onChange={() => setmode(!lightmode) } className={lightmode ? "btn btn-outline-dark custom-select mr-sm-2" : "btn btn-outline-light custom-select mr-sm-2"} id="inlineFormCustomSelect">

                <option defaultChecked value="1">Light</option>
                <option value="2">Dark</option>

              </select>
            </div>

          </div>
        </form>

      </div>




      <div className="center">

        <div className="search">
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

          <span>
            <div className="card">
              <img src={props.img6} className="card-img" />
              <div className="card-img-overlay">
                <h6 className="card-title">{props.name6}</h6>
                <h6 className='price'>Rs. {props.price6}</h6>
              </div>
            </div>

          </span>


          <span>

          <div className="card">
              <img src={props.img7} className="card-img" />
              <div className="card-img-overlay">
                <h6 className="card-title">{props.name7}</h6>
                <h6 className='price'>Rs. {props.price7}</h6>
              </div>
            </div>
          </span>
          
          
          <span>

          <div className="card">
              <img src={props.img8} className="card-img" />
              <div className="card-img-overlay">
                <h6 className="card-title">{props.name8}</h6>
                <h6 className='price'>Rs. {props.price8}</h6>
              </div>
            </div>

          </span>
          
          <span>

          <div className="card">
              <img src={props.img9} className="card-img" />
              <div className="card-img-overlay">
                <h6 className="card-title">{props.name9}</h6>
                <h6 className='price'>Rs. {props.price9}</h6>
              </div>
            </div>
          </span>

          
          <span>

          <div className="card">
              <img src={props.img10} className="card-img" />
              <div className="card-img-overlay">
                <h6 className="card-title">{props.name10}</h6>
                <h6 className='price'>Rs. {props.price10}</h6>
              </div>
            </div>
          </span>
          
          
          <span>
          <div className="card">
              <img src={props.img11} className="card-img" />
              <div className="card-img-overlay">
                <h6 className="card-title">{props.name11}</h6>
                <h6 className='price'>Rs. {props.price11}</h6>
              </div>
            </div>

          </span>
          
          
          <span>
          <div className="card">
              <img src={props.img12} className="card-img" />
              <div className="card-img-overlay">
                <h6 className="card-title">{props.name12}</h6>
                <h6 className='price'>Rs. {props.price12}</h6>
              </div>
            </div>

          </span>
          
          
          <span>

          <div className="card">
              <img src={props.img13} className="card-img" />
              <div className="card-img-overlay">
                <h6 className="card-title">{props.name13}</h6>
                <h6 className='price'>Rs. {props.price13}</h6>
              </div>
            </div>
          </span>
          

          <span>
            
          <div className="card">
              <img src={props.img14} className="card-img" />
              <div className="card-img-overlay">
                <h6 className="card-title">{props.name14}</h6>
                <h6 className='price'>Rs. {props.price14}</h6>
              </div>
            </div>
          </span>
          
          
          <span>

          <div className="card">
              <img src={props.img15} className="card-img" />
              <div className="card-img-overlay">
                <h6 className="card-title">{props.name15}</h6>
                <h6 className='price'>Rs. {props.price15}</h6>
              </div>
            </div>
          </span>


        </div>


      </div>


      <div class="right">
        <button className='btn  btn-outline-dark' onClick={() => {


          props.getitems()

        }}  >Fetch Items</button>
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

  name6: state.name6,
  price6: state.price6,
  img6: state.img6,

  name7: state.name7,
  price7: state.price7,
  img7: state.img7,

  name8: state.name8,
  price8: state.price8,
  img8: state.img8,

  name9: state.name9,
  price9: state.price9,
  img9: state.img9,

  name10: state.name10,
  price10: state.price10,
  img10: state.img10,

  name11: state.name11,
  price11: state.price11,
  img11: state.img11,

  name12: state.name12,
  price12: state.price12,
  img12: state.img12,

  name13: state.name13,
  price13: state.price13,
  img13: state.img13,

  name14: state.name14,
  price14: state.price14,
  img14: state.img14,

  name15: state.name15,
  price15: state.price15,
  img15: state.img15,
})


const mapDispatchToProps = (dispatch) => ({
  getitems: () => dispatch(getitems())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)



