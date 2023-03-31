import coin1 from "../../image/coin_1.webp";
import coin2 from "../../image/coin_2.webp";
import coin3 from "../../image/coin_3.webp";
import coin4 from "../../image/coin_4.webp";
import coin5 from "../../image/coin_5.webp";
import coin6 from "../../image/coin_6.webp";
import coin7 from "../../image/coin_7.webp";
import coin8 from "../../image/coin_8.webp";
import coin9 from "../../image/coin_9.webp";
import coin10 from "../../image/coin_10.webp";
import coin11 from "../../image/coin_11.webp";
import coin12 from "../../image/coin_12.webp";
import coin13 from "../../image/coin_13.webp";
import coin14 from "../../image/coin_14.webp";

function Coins({ widepos }) {
  return (
    <>
      <div className="Main-section-coin-part">
        <img src={coin14} alt="" className={widepos ? "coins": "coins"} />
        <img src={coin13} alt="" className={widepos ? "coins": "coins hide"} />
        <img src={coin12} alt="" className={widepos ? "coins": "coins hide"} />
        <img src={coin11} alt="" className={widepos ? "coins": "coins hide"} />
        <img src={coin10} alt="" className={widepos ? "coins": "coins hide"} />
        <img src={coin9} alt="" className={widepos ? "coins": "coins hide"} />
        <img src={coin8} alt="" className={widepos ? "coins": "coins hide"} />
        <img src={coin7} alt="" className={widepos ? "coins": "coins"} />
        <img src={coin6} alt="" className={widepos ? "coins": "coins"} />
        <img src={coin5} alt="" className={widepos ? "coins": "coins"} />
        <img src={coin4} alt="" className={widepos ? "coins": "coins"} />
        <img src={coin3} alt="" className={widepos ? "coins": "coins"} />
        <img src={coin2} alt="" className={widepos ? "coins": "coins"} />
        <img src={coin1} alt="" className={widepos ? "coins": "coins"} />
      </div>
    </>
  );
}

export default Coins;
