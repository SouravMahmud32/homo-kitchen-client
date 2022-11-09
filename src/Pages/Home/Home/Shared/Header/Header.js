import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBiking } from 'react-icons/fa';
import { AuthContext } from "../../../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .ctach(error => console.error(error))
    }
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
            <Link to="">
            {
                user?.uid ?
                <>
                <span></span>
                <button onClick={handleLogOut} variant="danger">Log Out</button>
                </>
                :
                <>
                    <Link style={{textDecoration: 'none'}} className='me-2' to='/login'>Login</Link>
                </>
            }
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
