import React from "react";

export const Aqistatus = () => {
  return (
    <div className="flex justify-center items-center">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ml-auto"
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            AQI Level: Good (50)
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Monitor the air quality in your city and stay informed about
            pollutants that may affect your health. Get up-to-date information
            on air quality levels with detailed insights and tips for healthier
            living!
          </p>
        </div>
      </a>
    </div>
  );
};

export default Aqistatus;
