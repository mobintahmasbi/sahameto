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
      <div className={decider ? "main-title": "main-title-mobile-size"}>
        <div className={decider ? "first-title": "first-title-mobile-size"}>
          <h1 className={decider ? "first-t-sec": "first-t-sec-mobile-size"}>
            سهمتو؛ سرمایه گذاری <span className="easy">آسان</span> در بازارهای
            بورس و ارزدیجیتال
          </h1>
        </div>
        <div className={decider ? "second-title": "second-title-mobile-size"}>
          <h1 className={decider ? "second-t-sec": "second-t-sec-mobile-size"}>
            خودت وقت نمیکنی ترید بزنی؟<br /> نمیدونی کی باید سهام یا ارزت رو بفروشی که
            بیشترین سود رو کسب کنی؟<br /> با کمک سهمتو بذار یه حرفه ای بجات
            سرمایه‌گذاری کنه!
          </h1>
        </div>
        <div className={decider ? "start-funding-main-size": "start-funding"}>
            شروع سرمایه گذاری
        </div>
      </div>
    </>
  );
}

export default MainTitle;
