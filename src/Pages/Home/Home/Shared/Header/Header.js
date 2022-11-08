import React from "react";
import { Link } from "react-router-dom";
import { FaBiking } from 'react-icons/fa';

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100 mb-12">
        <div className="flex-1">
          <Link to='/' className="btn btn-ghost normal-case text-xl text-orange-600"><FaBiking></FaBiking> homoKitchen</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to=''>Foods</Link>
            </li>
            <li>
              <Link to=''>Services</Link>
            </li>
            <li>
              <Link to=''>Blogs</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
