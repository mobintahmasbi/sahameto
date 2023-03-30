import logo from "../../image/logo.svg";

function MainHeader() {
  return (
    <>
      <div className="main-header">
        <div className="first-sec">
          <img src={logo} alt="" className="logo-main-size" />
        </div>
        <hr className="header-divider" />
        <div className="second-sec">
          <i className="material-icons searchicon">search</i>
          <input type="text" className="searchinwebsite" placeholder="جستجو بین +500 تریدر و 15 ارزدیجیتال و همه نمادهای بورسی" />
          <div className="expand-area">
            <div className="expand">
              همه
              <i className="material-icons">expand_more</i>            
            </div>            
          </div>
        </div>
        <div className="third-sec">
            <li className="header-option">
                خرید اشتراک
            </li>
            <li className="header-option">
                سیگنال ها
            </li>
            <li className="header-option">
              دیده بان
            </li>
            <li className="header-option">
              برترین ها
            </li>
            <li className="header-option more">
                بیتشر
                <i className="material-icons">expand_more</i>   
            </li>
        </div>
        <hr className="header-divider" />
        <div className="forth-sec">
            ثبت نام / ورود
        </div>
      </div>
    </>
  );
}

export default MainHeader;
