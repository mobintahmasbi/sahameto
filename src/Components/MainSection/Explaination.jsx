import trader from "../../image/trader.webp"

function Explaination() {
  return (
    <>
      <div className="Explaination">
        <h1 className="title-of-explaination">
          سرویس مدیریت سرمایه سهمتو چیست؟
        </h1>
        <div className="container-of-body-Ex">
          <div>
            <div className="ExEx">
              سرویس مدیریت سرمایه سهمتو به شما اجازه میدهد بدون صرف زمان و تنها
              با چند کلیک از سرویس مدیریت سرمایه الگوریتمی سهمتو بهره مند شوید.
              با استفاده از این سرویس میتوانید مطمئن باشید هر لحظه سرمایه شما
              تحت نظارت و مدیریت حرفه ای ها است.
            </div>
            <div className="startNow-Ex">
                همین الان شروع کن
            </div>
          </div>
          <img src={trader} alt="" className="traderimg" />
        </div>
      </div>
    </>
  );
}

export default Explaination;
