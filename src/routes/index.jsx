import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage/landingPage";


const AllRoutes = () => {
    return(
        <Routes>
            <Route index element={<LandingPage/>} />

        </Routes>
    )
}

export default AllRoutes