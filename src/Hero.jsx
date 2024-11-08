import React, { useState } from "react";
import Banner from "./assets/trump.png";
import Rocket from "./assets/rock.png";
import Twitter from "./assets/twitter.png";
import Telegram from "./assets/telegram.png";
import Blum from "./assets/pumpfun.jpg";
import Dexscreener from "./assets/dexsceener.png";

import { FaCopy } from "react-icons/fa";

function Hero() {
  const [isShow, setIsShow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="w-full flex justify-center  ">
      {isActive && (
        <div className="toast toast-center toast-top">
          <div className="btn btn-success">
            Contract Addres was copied successfully
          </div>
        </div>
      )}
      {isShow && (
        <div className="toast toast-center toast-middle">
          <div className="">
            <img src={Rocket} alt="" className="max-w-36 animate-ping" />
          </div>
        </div>
      )}
      {isShow && (
        <div className="toast toast-start toast-middle">
          <div className="">
            <img src={Rocket} alt="" className="max-w-36 animate-ping" />
          </div>
        </div>
      )}
      {isShow && (
        <div className="toast toast-end toast-middle">
          <div className="">
            <img src={Rocket} alt="" className="max-w-36 animate-ping" />
          </div>
        </div>
      )}
      {isShow && (
        <div className="toast toast-center toast-top">
          <div className="">
            <img src={Rocket} alt="" className="max-w-36 animate-ping" />
          </div>
        </div>
      )}
      {isShow && (
        <div className="toast toast-start toast-top">
          <div className="">
            <img src={Rocket} alt="" className="max-w-36 animate-ping" />
          </div>
        </div>
      )}
      {isShow && (
        <div className="toast toast-end toast-top">
          <div className="">
            <img src={Rocket} alt="" className="max-w-36 animate-ping" />
          </div>
        </div>
      )}
      {isShow && (
        <div className="toast toast-start toast-bottom">
          <div className="">
            <img src={Rocket} alt="" className="max-w-36 animate-ping" />
          </div>
        </div>
      )}
      {isShow && (
        <div className="toast toast-end toast-bottom">
          <div className="">
            <img src={Rocket} alt="" className="max-w-36 animate-ping" />
          </div>
        </div>
      )}
      {isShow && (
        <div className="toast toast-center toast-bottom">
          <div className="">
            <img src={Rocket} alt="" className="max-w-36 animate-ping" />
          </div>
        </div>
      )}
      <div className="hero bg-base-200 py-3 min-h-screen max-w-full ">
        <div className="max-w-full flex flex-col justify-center align-middle items-center ">
          <div className="flex align-middle text-center justify-center  my-4 bg-red-700 pt-6 px-6 gap-3 pb-0 rounded-lg max-w-screen-sm flex-wrap whitespace-break-spaces ">
            <img
              src={Banner}
              className=" rounded-xl shadow-2xl max-w-20 animate-bounce"
            />
            <img
              src={Banner}
              className=" rounded-xl shadow-2xl max-w-20 animate-bounce"
            />
            <img
              src={Banner}
              className=" rounded-xl shadow-2xl max-w-20 animate-bounce"
            />
            <img
              src={Banner}
              className=" rounded-xl shadow-2xl max-w-20 animate-bounce"
            />
            <img
              src={Banner}
              className=" rounded-xl shadow-2xl max-w-20 animate-bounce"
            />
            <img
              src={Banner}
              className=" rounded-xl shadow-2xl max-w-20 animate-bounce"
            />
            <img
              src={Banner}
              className=" rounded-xl shadow-2xl max-w-20 animate-bounce"
            />
            <img
              src={Banner}
              className=" rounded-xl shadow-2xl max-w-20 animate-bounce"
            />
            <img
              src={Banner}
              className=" rounded-xl shadow-2xl max-w-20 animate-bounce"
            />
          </div>
          <div
            className="bg-blue-700 py-6 rounded-lg px-1 mx-auto text-gray-200 max-w-screen-sm text-sm
          "
          >
            <h1 className="text-3xl font-bold">
              TrumpWinner Coin ($WINNER) - <br /> For the Ultimate Winners!
            </h1>
            <p className="py-6 max-w-5xl">
              Introducing TrumpWinner Coin ($WINNER), the meme coin that
              celebrates the spirit of a victorious Trump presidency, now live
              on the GasPump TON blockchain! Designed for winners and those who
              believe in the art of the deal, $WINNER combines meme culture with
              blockchain innovation. This token is all about embracing victory,
              triumph, and the boldness to stand out in the crypto world. <br />
              <br />
              <span className=" text-2xl "> Why $WINNER? </span> <br />
              1) Community-Driven Meme Power: A coin for fans, followers, and
              meme-makers who believe in winning big. <br />
              <br />
              2) Built on TON’s GasPump: Enjoy fast, scalable, and low-cost
              transactions that keep the fun going strong. <br /> <br />
              3) Victory Rewards: Holders of $WINNER get exclusive access to
              community rewards, events, and more "winning" perks as they hold
              their way to victory. <br />
              <br />
              <br />
              Join the winner's circle with $WINNER – because why settle for
              anything less than winning? Get your $WINNER today and let’s make
              memes great again!
            </p>
            <div className="max-w-full flex justify-center">
              <button
                onClick={() => {
                  setIsShow(true);
                  setTimeout(() => {
                    setIsShow(false);
                  }, 1000);
                }}
                className="btn btn-primary bg-blue-800 border-gray-100 mb-3 "
              >
                Pump $WINNER
                <img src={Rocket} alt="" className="max-w-5" />
              </button>
            </div>

            <h3 className="mb-3 text-lg flex rounded-md flex-col align-middle gap-2 justify-center items-center bg-red-700 py-3">
              <div>
                <span>Ca: </span>
              </div>
              <button
                className="flex items-center justify-center hover:text-blue-700"
                onClick={() => {
                  navigator.clipboard
                    .writeText(`0X00000000000000000000`)
                    .then(() => {
                      setIsActive(true);
                      setTimeout(() => {
                        setIsActive(false);
                      }, 2000);
                    })
                    .catch((err) => {
                      console.error("Failed to copy text");
                    });
                }}
              >
                <FaCopy /> 0X00000000000000000000
              </button>
            </h3>

            <div className="flex flex-col justify-center items-center gap-3 bg-blue-800 py-5 rounded-xl">
              <h3 className="text-xl">COMMUNITY !</h3>
              <div className="flex  justify-center gap-6">
                <a href="https://x.com/PopBase/status/1854110241048449165?t=mB8pTpKrzDr6pDMdPqKS7w&s=19">
                  <img
                    src={Twitter}
                    alt=""
                    className="max-w-10 hover:max-w-8 transition-all hover:transition-all"
                  />
                </a>
                <a href="https://t.me/WinnerTrump_Sol">
                  <img
                    src={Telegram}
                    alt=""
                    className="max-w-10 hover:max-w-8 transition-all hover:transition-all"
                  />
                </a>
                <a href="">
                  <img
                    src={Blum}
                    alt="blum"
                    className="max-w-10 rounded-lg hover:max-w-8 transition-all hover:transition-all"
                  />
                </a>
                <a href="https://dexscreener.com">
                  <img
                    src={Dexscreener}
                    alt=""
                    className="max-w-10   hover:max-w-8 transition-all hover:transition-all  rounded-lg"
                  />
                </a>
              </div>
            </div>
          </div>{" "}
          <div className="flex my-4 align-middle text-center justify-center  bg-red-700 pt-6 px-6 gap-3 pb-0 rounded-lg max-w-screen-sm flex-wrap whitespace-break-spaces  ">
            <img
              src={Banner}
              className=" rounded-xl shadow-2xl max-w-20 animate-bounce"
            />
            <img
              src={Banner}
              className=" rounded-xl shadow-2xl max-w-20 animate-bounce"
            />
            <img
              src={Banner}
              className=" rounded-xl shadow-2xl max-w-20 animate-bounce"
            />
            <img
              src={Banner}
              className=" rounded-xl shadow-2xl max-w-20 animate-bounce"
            />
            <img
              src={Banner}
              className=" rounded-xl shadow-2xl max-w-20 animate-bounce"
            />
            <img
              src={Banner}
              className=" rounded-xl shadow-2xl max-w-20 animate-bounce"
            />
            <img
              src={Banner}
              className=" rounded-xl shadow-2xl max-w-20 animate-bounce"
            />
            <img
              src={Banner}
              className=" rounded-xl shadow-2xl max-w-20 animate-bounce"
            />
            <img
              src={Banner}
              className=" rounded-xl shadow-2xl max-w-20 animate-bounce"
            />
          </div>
          <div className="flex bg-blue-700  gap-3 rounded-lg flex-col items-center justify-center py-8 bg-blue-700mt-3">
            <h4 className="text-3xl bg-red-700 text-white p-3 rounded-lg">
              How To Buy ?
            </h4>
            <h5 className="text-xl">
              1) Download Phantom Wallet from Appstore or Playmarket and open a
              wallet <br /> 2) Buy SOL via Binance, ByBit or Okx exchanges and
              send to your Phantom wallet. <br /> 3) Open Pump.fun and connect
              your phantom wallet <br /> 4) Go to pumpfun and search our CA
              address and buy through SOL
            </h5>
          </div>
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Hero;
