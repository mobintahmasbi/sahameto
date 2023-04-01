import logoFooter from "../../image/logoFooter.svg";

function TopFooter({ iswide }) {
  return (
    <>
      <div className="top-TopFooter">
        <div className={iswide ?"right-tTF": "right-tTF right-tTF-ms"}>
          <div className={iswide ? "top-rtTF":"hide"}>{"سهمتو >"}</div>
          <img src={logoFooter} alt="" className="bottom-rtTF" />
        </div>
        <div className={iswide ?"middle-tTF": "hide"}>
          <div className="top-mtTF">
            <span className="newGeneration">نسل جدید</span> اپ ویندوز سهمتو:
          </div>
          <div className="bottom-mtTF">
            <div>نصب سریع</div>
            <div>
              <i class="material-icons">file_download</i>
            </div>
          </div>
        </div>
        <div className="left-tTF">
          <div className="top-ltTF">تماس با ما</div>
          <div className="middle-ltTF">
            021-91304925
            <i class="material-icons">call</i>
          </div>
          <div className="bottom-ltTF">
            info@sahmeto.com
            <i class="material-icons">mail</i>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default TopFooter;
