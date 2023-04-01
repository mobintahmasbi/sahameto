import trader from "../../image/trader.webp"

function Explaination({ isWide }) {
  


  return (
    <>
      <div className={isWide ? "Explaination": "Explaination Ex-ms"}>
        <h1 className={isWide ?"title-of-explaination": "title-of-explaination toEx-ms"}>
          سرویس مدیریت سرمایه سهمتو چیست؟
        </h1>
        <div className={isWide ?"container-of-body-Ex": "cofbEx-ms"}>
          <div>
            <div className={isWide ?"ExEx": "ExEx-ms"}>
              سرویس مدیریت سرمایه سهمتو به شما اجازه میدهد بدون صرف زمان و تنها
              با چند کلیک از سرویس مدیریت سرمایه الگوریتمی سهمتو بهره مند شوید.
              با استفاده از این سرویس میتوانید مطمئن باشید هر لحظه سرمایه شما
              تحت نظارت و مدیریت حرفه ای ها است.
            </div>
            <div className={isWide ?"startNow-Ex": "startNow-Ex startNow-Ex-ms"}>
                همین الان شروع کن
            </div>
          </div>
          <img src={trader} alt="" className={isWide ?"traderimg": "traderimg traderimg-ms"} />
        </div>
      </div>
    </>
  );
}

export default Explaination;
