import React from "react";
import Logo from "./assets/logo.jpg";

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 bg-green-800 rounded-lg text-white">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl ">
            <img src={Logo} alt="" className="max-w-12 rounded-full " />
            <p>batFrog</p>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="btn btn-success bg-white mr-3">Buy On Blum</a>
            </li>
            <li>
              <details>
                <summary className="bg-white text-green-800 hover:text-white">
                  Socials
                </summary>
                <ul className="bg-base-100 rounded-t-none p-2 bg-green-800">
                  <li className="mb-3">
                    <a className="bg-white text-green-800 hover:text-white">
                      Telegram
                    </a>
                  </li>
                  <li>
                    <a className="bg-white text-green-800 hover:text-white">
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
