import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import BtnTitle from "./BtnTitle";
import BtnTitleMainsize from "./BtnTitleMainsize";
import Coins from "./Coins";
import MainPart from "./MainPart";
import "./mainsection.css";
function MainSection() {
  const [handleClick, sethandleClick] = useState(true);
  function changeHandleClick(changer) {
    sethandleClick(changer);
  }
  const [decider, setdecider] = useState(true);
  const widePos = useMediaQuery({
    query: "(min-width: 900px)",
  });

  useEffect(() => {
    if (widePos) {
      setdecider(true);
    } else {
      setdecider(false);
    }
  }, [widePos]);


  return (
    <>
      <div className="Main-section">
        <Coins widepos={widePos} />
        {decider ? (
          <BtnTitleMainsize
            deciderForBtnTitles={handleClick}
            statusOfBtns={changeHandleClick}
          />
        ) : (
          <BtnTitle
            deciderForBtnTitles={handleClick}
            statusOfBtns={changeHandleClick}
          />
        )}
        <MainPart deciderForMainPart={handleClick} />
      </div>
    </>
  );
}

export default MainSection;
