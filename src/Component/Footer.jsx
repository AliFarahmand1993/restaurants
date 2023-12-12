import React from "react";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white p-8">
      <div className="flex justify-between">
        <div className="w-1/3">
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-lg">
            Discover amazing food from local restaurants.
          </p>
        </div>
        <div className="w-1/3">
          <h3 className="text-2xl font-bold mb-4">Categories</h3>
          <ul className="text-lg">
            <li>Chinese</li>
            <li>Pizza</li>
            <li>Burgers</li>
            {/* Add more categories as needed */}
          </ul>
        </div>
        <div className="w-1/3">
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p className="text-lg">
            123 Street, City, Country
            <br />
            Email: info@example.com
          </p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2023 Uber Eats. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
