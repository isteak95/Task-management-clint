// Import React and other necessary modules
import React from 'react';
import { NavLink } from 'react-router-dom';

// Create the Banner component
const Banner = () => {

  // Define the function to handle the Explore button click
  const handleExploreClick = () => {
    // Specify the URL you want to redirect to
    const exploreUrl = '/explore'; // Change this to your desired URL
    history.push(exploreUrl);
  };

  // Return the JSX for the Banner component
  return (
    <div className="banner-container">
      {/* Customize the banner content */}
      <div className="banner-content">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing content and more...</p>
       <NavLink to='/signin'>  <button className="explore-button" onClick={handleExploreClick}>
          Let’s Explore
        </button></NavLink>
      </div>
      {/* Add styles for the banner */}
      <style jsx>{`
        .banner-container {
          background: url('/your-new-banner-image.jpg') center/cover;
          height: 400px; /* Adjust the height as needed */
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
