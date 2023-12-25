import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState('dark'); // Initially, set it to 'dark'

  // Function to toggle between dark and light themes
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const toggleDashboard = () => {
    // Replace with your logic for toggling the dashboard
  };

  const handleLogout = () => {
    Swal.fire({
      title: 'Logout',
      text: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, log out',
    }).then((result) => {
      if (result.isConfirmed) {
        logOut(); // Log the user out using the provided logOut function.
        Swal.fire('Logged out', 'You have been successfully logged out.', 'success');
      }
    });
  };

  return (
    <div className="py-1 shadow-md  bg-cyan-500">
      <div className={`navbar bg-base-300 ${theme === 'light' ? 'text-black' : ''}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/" className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'bg-rose-500' : '')}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/aboutus"
                  className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'bg-rose-500' : '')}
                >
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contactus"
                  className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'bg-rose-500' : '')}
                >
                   Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <h1 className='lg:text-4xl lg:font-semibold lg:mb-2  text-cyan-500'>Task Manager</h1>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'bg-rose-500' : '')}
              >
                Home
              </NavLink>
            </li>
            <li className="mx-3">
              <NavLink
                to="/aboutus"
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'bg-rose-500' : '')}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'bg-rose-500' : '')}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="l:navbar-end md:navbar-end navbar-end lg:gap-8 md:gap-2 ">
          <button className="lg:btn md:btn btn lg:mr-1 md:mr-3 mr-1" onClick={toggleTheme}>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
          {user ? (
            <React.Fragment>
              <div className="flex items-stretch  ">
                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className=" ">
                    <div className="lg:text-bold lg:text-xl mx-1 md:mx-auto lg:mx-auto  lg:-ml-3 lg:mr-5">
                      {user.displayName && user.photoURL ? (
                        <img
                          src={user.photoURL}
                          className="h-10 w-10 rounded-full lg:mr-auto md:mr-auto mr-2"
                          onClick={toggleDashboard}
                          style={{ cursor: 'pointer' }}
                        />
                      ) : (
                        <div
                          className="h-10 w-10 rounded-full bg-gray-300 lg:mr-auto md:mr-auto mr-2"
                          onClick={toggleDashboard}
                          style={{ cursor: 'pointer' }}
                        ></div>
                      )}
                    </div>
                  </div>
                  <ul className="menu dropdown-content z-[9] p-2 shadow  bg-cyan-500 rounded-box w-64 mt-4 text-center">
                    <li className="py-1 bg-white btn my-2">
                      <h2 className=" text-lg font-bold ">
                         {user.displayName}
                      </h2>
                    </li>
                    <li className="py-1 bg-white font-bold text-base rounded-md px-14 md:text-lg md:font-bold lg:text-bold lg:text-xl">
                      <NavLink
                        to="/dashboard"
                        className={({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'bg-cyan-500' : '')}
                      >
                        Dashboard
                      </NavLink>
                    </li>
                    <li className="bg-white my-5  rounded-md">
                      <button
                        className=" btn rounded-md font-bold text-base lg:text-bold lg:text-xl md:text-lg cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <NavLink to="/signin">
                <a className="btn lg:text-bold lg:text-xl lg:px-8 bg-teal-600">Sign In</a>
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
