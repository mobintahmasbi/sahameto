import { useMediaQuery } from "react-responsive";
import TopFooter from "./TopFooter";
import "./Footer.css"

function Footer() {
    const isWide = useMediaQuery({
        query: "(min-width: 900px)"
    })
    return ( 
        <>
            <TopFooter iswide={isWide}/>
        </>
     );
}

export default Footer;