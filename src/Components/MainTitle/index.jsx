import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import "./maintitle.css";

function MainTitle() {
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

  return (
    <>
      <div className="main-title-mobile-size">
        <div className="first-title-mobile-size">
          <h1 className="first-t-sec-mobile-size">
            سهمتو؛ سرمایه گذاری <span className="easy">آسان</span> در بازارهای
            بورس و ارزدیجیتال
          </h1>
        </div>
        <div className="second-title-mobile-size">
          <h1 className="second-t-sec-mobile-size">
            خودت وقت نمیکنی ترید بزنی؟<br /> نمیدونی کی باید سهام یا ارزت رو بفروشی که
            بیشترین سود رو کسب کنی؟<br /> با کمک سهمتو بذار یه حرفه ای بجات
            سرمایه‌گذاری کنه!
          </h1>
        </div>
        <div className="start-funding">
            شروع سرمایه گذاری
        </div>
      </div>
    </>
  );
}

export default MainTitle;
