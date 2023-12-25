import React from 'react';
import { NavLink } from 'react-router-dom';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';

const Banner = () => {



    return (
        <div className="banner-container">
            <div className="banner-content mb-96">
                  <NavLink to='/dashboard'>
                    <button className="explore-button" >
                        Let’s Explore
                    </button>
                </NavLink>
            </div>
            <style jsx>{`
        .banner-container {
          background: url('https://i.ibb.co/HxdLQbT/depositphotos-170541490-stock-illustration-task-management-multitask-time-management.jpg') center/cover;
          height: 1000px; /* Adjust the height as needed */
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
        }

        .banner-content {
          max-width: 600px;
          
          padding: 20px;
          background: rgba(0, 0, 0, 0.6); /* Adjust the background overlay */
          border-radius: 8px;
        }

        h1 {
          font-size: 2em;
          margin-bottom: 10px;
        }

        p {
          font-size: 1.2em;
          margin-bottom: 20px;
        }

        .explore-button {
          padding: 10px 20px;
          font-size: 1.2em;
          background-color: #4caf50; /* Customize button color */
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .explore-button:hover {
          background-color: #45a049; /* Customize button hover color */
        }
      `}</style>
        </div>
    );
};

// Export the Banner component as the default export
export default Banner;
