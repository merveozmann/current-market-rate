import "./home.css"
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi"
import { BiBitcoin } from "react-icons/bi"
import { FaEthereum } from "react-icons/fa"
import { SiRipple, SiBitcoincash, SiLitecoin } from "react-icons/si"




import axios from "axios"
import React, { useEffect, useState } from "react";

const Home = () => {
  const [goldValues, setGoldValues] = useState(null);
  const [currentRate, setCurrentRate] = useState([])
  const [cryptoValues, setCryptoValues] = useState([])


  const [isLoading, setLoading] = useState(true);
  const getAllGoldValues = () => {
    axios.get("https://api.genelpara.com/embed/altin.json", {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        setGoldValues(response.data);
        setLoading(false);
      }).catch(error => console.log(error))
  }
  const getAllCurrentRate = () => {
    axios.get("http://hasanadiguzel.com.tr/api/kurgetir", {
      headers: {},
    })
      .then((response) => {
        setCurrentRate(response.data.TCMB_AnlikKurBilgileri)
      }).catch(error => console.log(error))
  }
  const getAllCryptoValues = () => {
    axios.get("https://api.genelpara.com/embed/kripto.json", {
      headers: {},
    })
      .then((response) => {
        console.log(response.data)
        setCryptoValues(response.data)
      }).catch(error => console.log(error))
  }
  useEffect(() => {
    getAllCurrentRate();
    getAllCryptoValues();
    getAllGoldValues()

  }, []);
  if (isLoading) {
    return <div className="home__container">Loading...</div>;
  }
  //api.coincap.io/v2/assets
  //http://hasanadiguzel.com.tr/api/kurgetir
  //https://gist.github.com/berkocan/6da90f1aaa7b806317c99f9e636947bf

  return (
    <div className="home__container">
      <div className="gold__items">
        <article className="gold__item red">
          <div className="gold__item-top">
            <h2>Gram Altın</h2>
            {parseInt(goldValues["GA"].degisim) > 0 ? <FiTrendingUp className="gold__item-icon" /> : <FiTrendingDown className="gold__item-icon" />}
          </div>
          <p>Alış Fiyatı :{goldValues["GA"].alis}  </p>
          <p>Satış Fiyatı :{goldValues["GA"].satis} </p>
        </article>
        <article className="gold__item light__blue">
          <div className="gold__item-top">
            <h2>Çeyrek Altın</h2>
            {parseInt(goldValues["GA"].degisim) > 0 ? <FiTrendingUp className="gold__item-icon" /> : <FiTrendingDown className="gold__item-icon" />}

          </div>
          <p>Alış Fiyatı :{goldValues["C"].alis}  </p>
          <p>Satış Fiyatı :{goldValues["C"].satis} </p>
        </article>
        <article className="gold__item purple">
          <div className="gold__item-top">
            <h2>Yarım Altın</h2>
            {parseInt(goldValues["GA"].degisim) > 0 ? <FiTrendingUp className="gold__item-icon" /> : <FiTrendingDown className="gold__item-icon" />}

          </div>
          <p>Alış Fiyatı :{goldValues["Y"].alis}  </p>
          <p>Satış Fiyatı :{goldValues["Y"].satis} </p>
        </article>
        <article className="gold__item yellow">
          <div className="gold__item-top">
            <h2>Tam Altın</h2>
            {parseInt(goldValues["GA"].degisim) > 0 ? <FiTrendingUp className="gold__item-icon" /> : <FiTrendingDown className="gold__item-icon" />}

          </div>
          <p>Alış Fiyatı :{goldValues["T"].alis}  </p>
          <p>Satış Fiyatı :{goldValues["T"].satis} </p>
        </article>
        <article className="gold__item pink">
          <div className="gold__item-top">
            <h2>Cumhuriyet Altını</h2>
            {parseInt(goldValues["GA"].degisim) > 0 ? <FiTrendingUp className="gold__item-icon" /> : <FiTrendingDown className="gold__item-icon" />}
          </div>
          <p>Alış Fiyatı :{goldValues["CMR"].alis}  </p>
          <p>Satış Fiyatı :{goldValues["CMR"].satis} </p>
        </article>
      </div>
      <div className="current__rate">
        <div className="current__rate-card">
          <table className="current__rate-table">
            <thead>
              <th>PARA BİRİMİ</th>
              <th>ALIŞ FİYATI</th>
              <th>SATIŞ FİYATI</th>
            </thead>
            <tbody>
              {currentRate.slice(0, 10).map((data) => (
                <tr>
                  <td>{data.Isim}</td>
                  <td>{data.ForexBuying}</td>
                  <td>{data.ForexSelling}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="current__rate-button">
            <button>View More</button>
          </div>
        </div>
        <div className="crpyto__card">
          <article className="crypto__items">
            <div className="crypto__icon red">
              <BiBitcoin className="crypto__icon-size" />
            </div>
            <div className="crypto__item-1">
              <p>Bitcoin</p>
              <span>BTC</span>
            </div>
            <div className="crypto__item-2">
              <p>Market Cup</p>
              <span>${cryptoValues["BTC"].satis}</span>
            </div><div className="crypto__item-3">
              <p>24h change</p>
              <span>+{cryptoValues["BTC"].degisim}%</span>
            </div>
            <div className="crypto__graphic">
              <div class="line line1"></div>
              <div class="line line2"></div>
            </div>
            <div className="crypto__btn">
              <button>Tracle</button>
            </div>

          </article>
          <article className="crypto__items">
            <div className="crypto__icon purple">
              <FaEthereum className="crypto__icon-size" />
            </div>
            <div className="crypto__item-1">
              <p>Ethereum</p>
              <span>ETH</span>
            </div>
            <div className="crypto__item-2">
              <p>Market Cup</p>
              <span>${cryptoValues["ETH"].satis}</span>
            </div><div className="crypto__item-3">
              <p>24h change</p>
              <span>+{cryptoValues["ETH"].degisim}%</span>
            </div>
            <div className="crypto__graphic">
              <div class="line line1"></div>
              <div class="line line2"></div>
            </div>
            <div className="crypto__btn">
              <button>Tracle</button>
            </div>

          </article>
          <article className="crypto__items">
            <div className="crypto__icon light__blue">
              <SiRipple className="crypto__icon-size" />
            </div>
            <div className="crypto__item-1">
              <p>Ripple</p>
              <span>XRP</span>
            </div>
            <div className="crypto__item-2">
              <p>Market Cup</p>
              <span>${cryptoValues["XRP"].satis}</span>
            </div><div className="crypto__item-3">
              <p>24h change</p>
              <span>+{cryptoValues["XRP"].degisim}%</span>
            </div>
            <div className="crypto__graphic">
              <div class="line line1"></div>
              <div class="line line2"></div>
            </div>
            <div className="crypto__btn">
              <button>Tracle</button>
            </div>

          </article>
          <article className="crypto__items">
            <div className="crypto__icon yellow">
              <SiBitcoincash className="crypto__icon-size" />
            </div>
            <div className="crypto__item-1">
              <p>Bitcoin Cash</p>
              <span>BCH</span>
            </div>
            <div className="crypto__item-2">
              <p>Market Cup</p>
              <span>${cryptoValues["BCH"].satis}</span>
            </div><div className="crypto__item-3">
              <p>24h change</p>
              <span>+{cryptoValues["BCH"].degisim}%</span>
            </div>
            <div className="crypto__graphic">
              <div class="line line1"></div>
              <div class="line line2"></div>
            </div>
            <div className="crypto__btn">
              <button>Tracle</button>
            </div>

          </article>
          <article className="crypto__items">
            <div className="crypto__icon pink">
              <SiLitecoin className="crypto__icon-size" />
            </div>
            <div className="crypto__item-1">
              <p>Litecoin</p>
              <span>LTC</span>
            </div>
            <div className="crypto__item-2">
              <p>Market Cup</p>
              <span>${cryptoValues["LTC"].satis}</span>
            </div><div className="crypto__item-3">
              <p>24h change</p>
              <span>+{cryptoValues["LTC"].degisim}%</span>
            </div>
            <div className="crypto__graphic">
              <div class="line line1"></div>
              <div class="line line2"></div>
            </div>
            <div className="crypto__btn">
              <button>Tracle</button>
            </div>

          </article>
        </div>
      </div>
    </div>
  )
}

export default Home
