import React from 'react';
import { Link , NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div>
    <header className="hide-when-mobile-screen">
    <Link to="/">
    <h1>Web Devs</h1>
    </Link>
    <ul className="flex">
      <li className="main-list">
        <NavLink className="main-link" to="/html">
          HTML
        </NavLink>
        <ul className="sub-ul">
          <li>
            <a className="sub-link" href="www">
              Full course
            </a>
          </li>
          <li>
            <a className="sub-link" href="www">
              Crash Course
            </a>
          </li>
          <li>
            <a className="sub-link" href="www">
              learn 1hours
            </a>
          </li>
        </ul>
      </li>
      <li className="main-list">
        <NavLink className="main-link" to="/css">
          CSS
        </NavLink>
        <ul className="sub-ul">
          <li>
            <a className="sub-link" href="www">
              Full course
            </a>
          </li>
          <li>
            <a className="sub-link" href="www">
              Css Example
            </a>
          </li>
          <li className="mini-project">
            <a className="sub-link" href="www">
              Mini Projects&nbsp; &nbsp; &nbsp; +
            </a>
            <ul className="sub-sub-ul">
              <li>
                <a className="sub-link" href="www">
                  project 1
                </a>
              </li>
              <li>
                <a className="sub-link" href="www">
                  project 2
                </a>
              </li>
              <li>
                <a className="sub-link" href="www">
                  project 3
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <li className="main-list">
        <NavLink className="main-link" to="/javascript">
          JavaScript
        </NavLink>
        <ul className="sub-ul sub-link-js">
          <li>
            <a href="www">Comming soon🔥</a>
          </li>
        </ul>
      </li>
    </ul>
  </header>
  <header className="show-when-mobile-screen">
    <h1>Web devs</h1>
    <label htmlFor="bar">
      <i className="fa-solid fa-bars" />
    </label>
    <input id="bar" type="checkbox" />
    <div className="show-onclick">
      <div className="main-div">
        <label className="checkbox" htmlFor="html">
          HTML <i className="fa-solid fa-plus" />
        </label>
        <input type="checkbox" id="html" />
        <ul className="sub-div">
          <li>
            <a className="sub-link" href="www">
              Full course
            </a>
          </li>
          <li>
            <a className="sub-link" href="www">
              Crash Course
            </a>
          </li>
          <li>
            <a className="sub-link" href="www">
              learn 1hours
            </a>
          </li>
        </ul>
      </div>
      <div className="main-div">
        <label className="checkbox" htmlFor="css">
          CSS <i className="fa-solid fa-plus" />
        </label>
        <input type="checkbox" id="css" />
        <ul className="sub-div">
          <li>
            <a className="sub-link" href="www">
              Full course
            </a>
          </li>
          <li>
            <a className="sub-link" href="www">
              Css Example
            </a>
          </li>
          <li>
            <label htmlFor="mini">
              Mini Projects <i className="fa-solid fa-plus" />
            </label>
            <input type="checkbox" id="mini" />
            <ul className="sub-sub-div">
              <li>
                <a className="sub-link" href="www">
                  project 1
                </a>
              </li>
              <li>
                <a className="sub-link" href="www">
                  project 2
                </a>
              </li>
              <li>
                <a className="sub-link" href="www">
                  project 3
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="main-div">
        <label className="checkbox" htmlFor="js">
          JavaScript <i className="fa-solid fa-plus" />
        </label>
        <input type="checkbox" id="js" />
        <ul className="sub-div">
          <li>
            <a href="www">Comming soon🔥</a>
          </li>
        </ul>
      </div>
    </div>
  </header>
    </div>
  );
}

export default Header;
