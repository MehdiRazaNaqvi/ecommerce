
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import App from "./App"



const Rou = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/ecommerce" element={<App />} />
                </Routes>
            </Router>

        </div>
    )
}




export default Rou