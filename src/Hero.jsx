import React, { useState } from "react";
import Banner from "./assets/banner.jpg";
import Rocket from "./assets/rock.png";
import Twitter from "./assets/twitter.png";
import Telegram from "./assets/telegram.png";
import Blum from "./assets/blum.png";
import Dexscreener from "./assets/dexsceener.png";

import { FaCopy } from "react-icons/fa";

function Hero() {
  const [isShow, setIsShow] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="">
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
      <div className="hero bg-base-200 pt-3 min-h-screen  max-w-5xl">
        <div className="max-w-full flex flex-col  ">
          <img
            src={Banner}
            className=" rounded-xl shadow-2xl max-w-full mb-9"
          />
          <div
            className="bg-green-800 py-3 rounded-lg px-3 mx-auto text-gray-200 max-w- text-sm
          "
          >
            <h1 className="text-5xl font-bold">Welcome new ERA!</h1>
            <p className="py-6 max-w-5xl">
              PBatFrog (BFROG) is a playful memecoin on the TON blockchain,
              launched via the Blum Memepad. As a character-inspired token,
              BatFrog combines humor and the spirit of the crypto community,
              featuring a quirky amphibian superhero mascot with a loyal
              following. BatFrog (BFROG) aims to attract meme enthusiasts and
              blockchain newcomers with its lighthearted theme and innovative
              approach. As a TON-based asset, it benefits from low fees, fast
              transactions, and decentralized security, making it an engaging
              and accessible entry point for users exploring the world of
              memecoins and the TON ecosystem.
            </p>
            <div className="max-w-full flex justify-center">
              <button
                onClick={() => {
                  setIsShow(true);
                  setTimeout(() => {
                    setIsShow(false);
                  }, 1000);
                }}
                className="btn btn-primary bg-green-600 border-gray-100 mb-3 "
              >
                Pump $BFROG
                <img src={Rocket} alt="" className="max-w-5" />
              </button>
            </div>

            <h3 className="mb-3 text-lg flex flex-col align-middle gap-2 justify-center items-center">
              <div>
                <button
                  onClick={() => {
                    navigator.clipboard
                      .writeText(`0x0000000000000000000000000000000000000000`)
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
                  className="btn btn-xs"
                >
                  <span>
                    <FaCopy />
                  </span>
                </button>
                <span>Ca: </span>
              </div>
              <span>0x000000000000000000000000000000</span>
            </h3>

            <div className="flex  justify-center gap-6 bg-zinc-700 py-5 rounded-xl">
              <a href="https://x.com/BatFrog_Ton">
                <img
                  src={Twitter}
                  alt=""
                  className="max-w-10 hover:max-w-16 transition-all hover:transition-all"
                />
              </a>
              <a href="https://t.me/Batfrog_onTon">
                <img
                  src={Telegram}
                  alt=""
                  className="max-w-10 hover:max-w-16 transition-all hover:transition-all"
                />
              </a>
              <a href="https://t.me/Batfrog_onTon">
                <img
                  src={Blum}
                  alt="blum"
                  className="max-w-10 rounded-lg hover:max-w-16 transition-all hover:transition-all"
                />
              </a>
              <a href="https://dexscreener.com">
                <img
                  src={Dexscreener}
                  alt=""
                  className="max-w-10   hover:max-w-16 transition-all hover:transition-all  rounded-lg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
