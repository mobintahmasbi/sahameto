import BtnTitle from "./BtnTitle";
import Coins from "./Coins";
import "./mainsection.css"
function MainSection() {
    return ( 
        <>
            <div className="Main-section">
                <Coins />
                <BtnTitle/>
            </div>
        </>
     );
}

export default MainSection;