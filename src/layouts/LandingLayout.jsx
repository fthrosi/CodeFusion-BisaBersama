import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import LandingPage from "../pages/LandingPage";
import Footer from "../components/footer";

export default function LayoutLanding(){
    return(
        <div>
            <Navbar/>
            <LandingPage/>
            <Footer/>
        </div>
    )
    
}