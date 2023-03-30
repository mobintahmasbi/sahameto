import coin1 from "../../image/coin_1.webp";
import coin2 from "../../image/coin_2.webp";
import coin3 from "../../image/coin_3.webp";
import coin4 from "../../image/coin_4.webp";
import coin5 from "../../image/coin_5.webp";
import coin6 from "../../image/coin_6.webp";
import coin7 from "../../image/coin_7.webp";
import coin14 from "../../image/coin_14.webp";

function Coins() {
  return (
    <>
      <div className="Main-section-coin-part">
        <img src={coin14} alt="" className="coins" />
        <img src={coin7} alt="" className="coins" />
        <img src={coin6} alt="" className="coins" />
        <img src={coin5} alt="" className="coins" />
        <img src={coin4} alt="" className="coins" />
        <img src={coin3} alt="" className="coins" />
        <img src={coin2} alt="" className="coins" />
        <img src={coin1} alt="" className="coins" />
      </div>
    </>
  );
}

export default Coins;
