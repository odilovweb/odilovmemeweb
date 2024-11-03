import React from "react";
import Logo from "./assets/logo.jpg";

function Navbar() {
  return (
    <div>
      <div className="navbar max-w-full  flex-col text-sm bg-green-800 rounded-lg text-white">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl ">
            <img src={Logo} alt="" className="max-w-12 rounded-full " />
            <p>batFrog</p>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                href="https://t.me/gasPump_bot/app?startapp=eyJyZWZfdXNlcl9pZCI6ODQxODg2OTY2LCJ0b2tlbl9hZGRyZXNzIjoiRVFCZjNKSndKVWdfckM4bzhHNU9mZXgyS2h0NEZZVy1SYURfeEU4VWhmV2pMLU5QIn0"
                className="btn btn-success text-green-800 btn-sm bg-white mr-3"
              >
                Buy On GasPump
              </a>
            </li>
            <li>
              <details>
                <summary className="text-green-800 bg-white text-sm hover:text-white p-1.5">
                  Socials
                </summary>
                <ul className=" rounded-t-none p-2 bg-green-800">
                  <li className="mb-3">
                    <a
                      href="https://t.me/Batfrog_onTon"
                      className="bg-white text-green-800 hover:text-white"
                    >
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/BatFrog_Ton"
                      className="bg-white text-green-800 hover:text-white"
                    >
                      Twitter
                    </a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
