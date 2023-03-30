import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import MainHeader from "./mainHeader";
import MobileHeader from "./mobileHeader";
import "./header.css";

function Header() {
  const widePos = useMediaQuery({
    query: "(min-width: 900px)",
  });

  const [decider, setdecider] = useState(false);

  useEffect(() => {
    if (widePos) {
      setdecider(true);
    } else {
      setdecider(false);
    }
  }, [widePos]);
  return <>{decider ? <MainHeader /> : <MobileHeader />}</>;
}

export default Header;
