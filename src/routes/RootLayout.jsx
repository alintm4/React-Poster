import MainHeader  from "../components/MainHeader";
import { Outlet } from "react-router-dom";
function Rootlayout(){
    return(
        <>
        <MainHeader />
        <Outlet />
        </>
    );

    
}
export default Rootlayout;