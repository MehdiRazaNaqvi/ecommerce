
import { useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './App.css';




import { getitems } from "./store/action/action"

function App(props) {


  const [lightmode, setmode] = useState(true)
  let navigate = useNavigate();


  // console.log(props.data)
  const arr = Object.values(props.data)
  // console.log(arr)



  return (

    <div className={lightmode ? "parent" : "parent dark"}>


      <div className="left" >



        <form>
          <div className="form-row align-items-center">
            <div className="col-auto my-1">

              <select onChange={() => setmode(!lightmode)} className={lightmode ? "btn btn-outline-dark custom-select mr-sm-2" : "btn btn-outline-light custom-select mr-sm-2"} id="inlineFormCustomSelect">

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
          {arr.map((v, i) =>

            <span onClick={() => navigate(`/${v.name}`)} key={i}>


              <div className="card">

                <img src={v.img} className="card-img" />
                <div className="card-img-overlay">
                  <h6 className="card-title">{v.name}</h6>
                  <h6 className='price'>Rs. {v.price}</h6>
                </div>
              </div>

            </span>

          )} 







        </div>


      </div>


      <div className="right">
        <button className='btn  btn-outline-dark' onClick={() => {


          props.getitems()

        }}  >Fetch Items</button>
      </div>

    </div>

  );
}


const mapStateToProps = (state) => ({


  data: state.data

})


const mapDispatchToProps = (dispatch) => ({
  getitems: () => dispatch(getitems())
})


export default connect(mapStateToProps, mapDispatchToProps)(App)



