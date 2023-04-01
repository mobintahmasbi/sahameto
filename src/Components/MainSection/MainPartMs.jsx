import { useState, useEffect } from "react";

function MainPartMs({ deciderForMainPart }) {
  const [values, setvalues] = useState([432, 12, 2]);
  useEffect(() => {
    if (deciderForMainPart) {
      setvalues([432, 12, 2]);
    } else {
      setvalues([23232, 12, 2]);
    }
  }, [deciderForMainPart]);

  return (
    <>
      <div className="mobilesize-mp">
        <div className="rightside-mp-ms">
          <h1 className="maintite-rightside-mp-ms">مقایسه روش های سرمایه گذاری</h1>
          <h3 className="title-rightside-mp-ms">پارامتر های زیر را انتخاب کنید</h3>
          <div className="counter-mp">
            <div className="top">
              <h3 className="toptitles-right">میزان سرمایه</h3>
              <h3 className="toptitles-left">
                {values[0]} {deciderForMainPart ? "میلیون تومان" : "تتر"}
              </h3>
            </div>
            <div className="middle">
              <input
                type="range"
                className="ranger"
                min={deciderForMainPart ? 300 : 5000}
                max={deciderForMainPart ? 1000 : 100000}
                step={1}
                defaultValue={deciderForMainPart ? 432 : 23232}
                onInput={(e) => {
                  let vs = 0;
                  vs = parseInt(e.target.value);
                  setvalues([vs, values[1], values[2]]);
                }}
              />
            </div>
            <div className="bottom">
              <h3 className="bottomtitles-right">
                {deciderForMainPart ? "1 میلیارد تومان" : "100,000 تتر"}
              </h3>
              <h3 className="bottomtitles-left">
                {deciderForMainPart ? "300 میلیون تومان" : "5,000 تتر"}
              </h3>
            </div>
          </div>
          <div className="counter-mp">
            <div className="top">
              <h3 className="toptitles-right">مدت سرمایه گذاری</h3>
              <h3 className="toptitles-left">{values[1]}ماه</h3>
            </div>
            <div className="middle">
              <input
                type="range"
                className="ranger"
                min={1}
                max={24}
                step={1}
                defaultValue={12}
                onInput={(e) => {
                  let vs = 0;
                  vs = parseInt(e.target.value);
                  setvalues([values[0], vs, values[2]]);
                }}
              />
            </div>
            <div className="bottom">
              <h3 className="bottomtitles-right">24 ماه</h3>
              <h3 className="bottomtitles-left">1 ماه</h3>
            </div>
          </div>
          <div className="counter-mp">
            <div className="top">
              <h3 className="toptitles-right">میزان ریسک</h3>
              <h3 className="toptitles-left">{values[2]}</h3>
            </div>
            <div className="middle">
              <input
                type="range"
                className="ranger"
                min={1}
                max={3}
                step={1}
                defaultValue={2}
                onInput={(e) => {
                  let vs = 0;
                  vs = parseInt(e.target.value);
                  setvalues([values[0], values[1], vs]);
                }}
              />
            </div>
            <div className="bottom">
              <h3 className="bottomtitles-right">3</h3>
              <h3 className="bottomtitles-left">1</h3>
            </div>
          </div>
          <div className="details-mp">
            <ul>
              <li className={deciderForMainPart ? "detailsecs-mpd" : "hide"}>
                نرخ سپرده بانکی برای سپرده یک ساله در 18 درصد در نظر گرفته شده
                است
              </li>
              <li className={deciderForMainPart ? "detailsecs-mpd" : "hide"}>
                نرخ سود سالانه صندوق‌های درآمد ثابت معمولا بین 18 تا 22 متغیر
                است که در اینجا 23 درصد محاسبه شده است.
              </li>
              <li className={deciderForMainPart ? "detailsecs-mpd" : "hide"}>
                نرخ سود سالانه صندوق‌های درآمد ثابت معمولا بین 23 تا 28 متغیر
                است که به ازای ریسک بیشتر سودآوری بیشتری لحاظ می شود.
              </li>
              <li className={deciderForMainPart ? "detailsecs-mpd" : "hide"}>
                نرخ سود سالانه مدیریت سرمایه سهمتو و بر اساس عملکرد 9 ماهه سهمتو
                و بدون لحاظ کردن سود حاصل از تغییرات نرخ دلار بین 40 تا 60 درصد
                درنظر گرفته شده است که به ازای ریسک بیشتر سودآوری بیشتری لحاظ می
                شود.
              </li>
              <li className={deciderForMainPart ? "hide" : "detailsecs-mpd"}>
                نرخ سپرده بانکی برای سپرده یک ساله در 4 درصد در نظر گرفته شده
                است.
              </li>
              <li className={deciderForMainPart ? "hide" : "detailsecs-mpd"}>
                نرخ سود سالانه مدیریت سرمایه سهمتو و بر اساس عملکرد 9 ماهه سهمتو
                و بدون لحاظ کردن سود حاصل از تغییرات نرخ دلار بین 40 تا 60 درصد
                درنظر گرفته شده است که به ازای ریسک بیشتر سودآوری بیشتری لحاظ می
                شود.
              </li>
            </ul>
          </div>
        </div>

        <hr className="partdivider-ms" />
        <div className="leftside-mp-ms">
          <h2 className="maintitle-leftside-mp">تخمین سود حاصل شده</h2>
          <div className="detail-leftside-mp">
            <div className="right-det">بانک:</div>
            <div className="left-det">
              {deciderForMainPart
                ? Math.floor(((values[0] * 0.18) / 12) * values[1])
                : Math.floor(((values[0] * 0.04) / 12) * values[1])}
              {deciderForMainPart ? "میلیون تومان" : "تتر"}
            </div>
          </div>

          <div className={deciderForMainPart ? "detail-leftside-mp" : "hide"}>
            <div className="right-det">صندوق درآمد ثابت:</div>
            <div className="left-det">
              {Math.floor(((values[0] * 0.23) / 12) * values[1])} میلیون تومان
            </div>
          </div>
          <div className={deciderForMainPart ? "detail-leftside-mp" : "hide"}>
            <div className="right-det">صندوق درآمد مختلط:</div>
            <div className="left-det">
              {Math.floor(
                ((values[0] * 0.23) / 12) * values[1] + (values[2] - 1) * 10
              )}
              میلیون تومان
            </div>
          </div>

          <div className="detail-leftside-mp last-det">
            <div className="right-det right-last-det">سرمایه گذاری سهمتو:</div>
            <div className="left-det left-last-det">
              {Math.floor(
                ((values[0] * 0.6) / 12) * values[1] + (values[2] - 1) * 20
              )}
              {deciderForMainPart ? "میلیون تومان" : "تتر"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPartMs;
