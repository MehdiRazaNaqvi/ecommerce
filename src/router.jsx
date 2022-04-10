
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "./App"
import Details from "./Details.jsx";


const Rou = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/ecommerce" element={<App />} />
                    <Route path="/:name" element={<Details />} />
                </Routes>
            </Router>

        </div>
    )
}




export default Rou