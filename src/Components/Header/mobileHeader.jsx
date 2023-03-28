import logo from "../../image/logo.svg";

function MobileHeader() {
  return (
    <>
      <div className="mobile-header">
        <div className="left-side">
          <i class="material-icons menu-hmaber">menu</i>
          <i class="material-icons search-menu">search</i>
        </div>
        <div className="logo">
          <img src={logo} alt="" className="logo-mobile-size" />
        </div>
        <div className="account-mobile-size">
          <i class="material-icons account-icon-ms">person_outline</i>
        </div>
      </div>
    </>
  );
}

export default MobileHeader;
