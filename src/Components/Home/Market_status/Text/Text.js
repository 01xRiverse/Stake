import React from "react";
import ReactDOM from "react-dom";
import { useDencrypt } from "use-dencrypt-effect";
import './Text.css'


const values = ["The Market's up 12%","Marketcap:$2.3T","BTC dominance:44%","ETH dominance:20.2%","Cryptos:11,602","Exchanges:405","24h Vol:$124B","BTC:$49,991","ETH:$4100","Stablecoins Mcap:$92B","DeFi Mcap $13.47B"];
const options = {
    chars: ["_"]
  }
  
export const Text = () => {
    const { result, dencrypt } = useDencrypt(options);

  React.useEffect(() => {
    let i = 0;

    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2250);

    return () => clearInterval(action);
  }, []);

  return <h1 className="txt">{result}</h1>;
};

