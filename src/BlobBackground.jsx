import { useEffect } from "react";
import "./BlobBackground.css";

const BlobBackground = () => {
  useEffect(() => {
    const blobs = document.querySelectorAll(".shape-blob");
    
    blobs.forEach(blob => {
      // Random positions
      const randomTop = Math.floor(Math.random() * 100) + "%";
      const randomLeft = Math.floor(Math.random() * 100) + "%";
      
      blob.style.top = randomTop;
      blob.style.left = randomLeft;
    });
  }, []);

  return (
    <div className="blob-c">
      <div className="shape-blob"></div>
      <div className="shape-blob one"></div>
      <div className="shape-blob two"></div>
      <div className="shape-blob three"></div>
      <div className="shape-blob four"></div>
    </div>
  );
};

export default BlobBackground;
