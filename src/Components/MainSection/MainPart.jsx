import { useState } from "react";

function MainPart() {
  const [values, setvalues] = useState([432, 12, 2]);

  return (
    <>
      <div className="mainpart">
        <div className="mainpart-secs rightside-mp">
          <h1 className="maintite-rightside-mp">مقایسه روش های سرمایه گذاری</h1>
          <h3 className="title-rightside-mp">پارامتر های زیر را انتخاب کنید</h3>
          <div className="counter-mp">
            <div className="top">
              <h3 className="toptitles-right">میزان سرمایه</h3>
              <h3 className="toptitles-left">{values[0]} میلیون تومان</h3>
            </div>
            <div className="middle">
              <input
                type="range"
                className="ranger"
                min={300}
                max={1000}
                step={1}
                defaultValue={432}
                onInput={(e) => {
                  let vs = 0;
                  vs = parseInt(e.target.value);
                  setvalues([vs, values[1], values[2]]);
                }}
              />
            </div>
            <div className="bottom">
              <h3 className="bottomtitles-right">1 میلیارد تومان</h3>
              <h3 className="bottomtitles-left">300 میلیون تومان</h3>
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
              <li className="detailsecs-mpd">
                نرخ سپرده بانکی برای سپرده یک ساله در 18 درصد در نظر گرفته شده
                است
              </li>
              <li className="detailsecs-mpd">
                نرخ سود سالانه صندوق‌های درآمد ثابت معمولا بین 18 تا 22 متغیر
                است که در اینجا 23 درصد محاسبه شده است.
              </li>
              <li className="detailsecs-mpd">
                نرخ سود سالانه صندوق‌های درآمد ثابت معمولا بین 23 تا 28 متغیر
                است که به ازای ریسک بیشتر سودآوری بیشتری لحاظ می شود.
              </li>
              <li className="detailsecs-mpd">
                نرخ سود سالانه مدیریت سرمایه سهمتو و بر اساس عملکرد 9 ماهه سهمتو
                و بدون لحاظ کردن سود حاصل از تغییرات نرخ دلار بین 40 تا 60 درصد
                درنظر گرفته شده است که به ازای ریسک بیشتر سودآوری بیشتری لحاظ می
                شود.
              </li>
            </ul>
          </div>
        </div>

        <hr className="partdivider" />
        <div className="mainpart-secs leftside-mp">
          <h2 className="maintitle-leftside-mp">تخمین سود حاصل شده</h2>
          <div className="detail-leftside-mp">
                <div className="right-det">
                بانک:
                </div>
                <div className="left-det">
                78 میلیون تومان
                </div>  
          </div>
          <div className="detail-leftside-mp">
                <div className="right-det">
                صندوق درآمد ثابت:
                </div>
                <div className="left-det">
                99 میلیون تومان
                </div>  
          </div>
          <div className="detail-leftside-mp">
                <div className="right-det">
                صندوق درآمد مختلط:
                </div>
                <div className="left-det">
                110 میلیون تومان
                </div>  
          </div>
          <div className="detail-leftside-mp last-det">
                <div className="right-det right-last-det">
                سرمایه گذاری سهمتو:
                </div>
                <div className="left-det left-last-det">
                260 میلیون تومان
                </div>  
          </div>
          <div className="leftside-mp-btn">
            همین الان شروع کن
          </div>
        </div>
      </div>
    </>
  );
}

export default MainPart;
