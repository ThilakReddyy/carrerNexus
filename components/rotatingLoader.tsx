import React from "react";
import { LoaderCircle } from "lucide-react";

const RotatingLoader = () => {
  return (
    <div
      style={{
        display: "inline-block",
        animation: "rotate 1s linear infinite", // Apply the rotation animation
      }}
    >
      <LoaderCircle width="25" height="25" /> {/* Adjust size as needed */}
    </div>
  );
};

export default RotatingLoader;
