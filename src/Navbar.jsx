import React from "react";
import Logo from "./assets/logo.jpg";

function Navbar() {
  return (
    <div className="mb-4">
      <div className="navbar max-w-full  flex-col text-sm bg-blue-700 rounded-lg text-white">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl ">
            <img src={Logo} alt="" className="max-w-12 rounded-full " />
            <p>WINNER</p>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                href=""
                className="btn btn-success text-blue-700 btn-sm bg-white mr-3"
              >
                Buy On PumpFun
              </a>
            </li>
            <li>
              <details>
                <summary className="text-blue-700 bg-white text-sm hover:text-white p-1.5">
                  Socials
                </summary>
                <ul className="flex rounded-t-none p-2 bg-blue-700">
                  <li className="mb-3">
                    <a
                      href="https://t.me/WinnerTrump_Sol"
                      className="bg-white text-blue-700 hover:text-white"
                    >
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/PopBase/status/1854110241048449165?t=mB8pTpKrzDr6pDMdPqKS7w&s=19"
                      className="bg-white text-blue-700 hover:text-white"
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
