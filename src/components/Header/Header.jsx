import React from "react";
import TMDLogo from "../../Icons/TmdLogo.js";

// Simple Header with logo
const Header = () => {
  return (
    <div className="w-full h-20 bg-blue-900 flex flex-row justify-start items-center">
      <div className="container max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-6xl mx-auto px-4">
        <TMDLogo width="154px" height="20px" />
      </div>
    </div>
  );
};

export default Header;
