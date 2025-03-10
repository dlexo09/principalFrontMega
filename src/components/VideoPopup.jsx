import React from "react";
import ReactDOM from "react-dom";

const VideoPopup = ({ videoUrl, onClose }) => {
  return ReactDOM.createPortal(
    <div className="video-popup-overlay">
      <div className="video-popup-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        {/* Usar un iframe para YouTube */}
        <iframe
          src={videoUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>,
    document.body
  );
};

export default VideoPopup;