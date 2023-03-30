import logo from "../../image/logo.svg";

function MobileHeader() {
  return (
    <>
      <div className="mobile-header">
        <div className="left-side">
          <i className="material-icons menu-hmaber">menu</i>
          <i className="material-icons search-menu">search</i>
        </div>
        <div className="logo">
          <img src={logo} alt="" className="logo-mobile-size" />
        </div>
        <div className="account-mobile-size">
          <i className="material-icons account-icon-ms">person_outline</i>
        </div>
      </div>
    </>
  );
}

export default MobileHeader;
