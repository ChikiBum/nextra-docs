// ImagePreview.js
import React, { useState } from 'react';
import FullScreen from 'react-fullscreen-image'; // Import the react-fullscreen-image component

const ImagePreview = ({ imageUrl }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div>
      <img
        src={imageUrl}
        alt="Image"
        onClick={toggleFullScreen}
        style={{ cursor: 'pointer' }}
      />
      {isFullScreen && (
        <FullScreen
          isFullScreen={isFullScreen}
          onChange={toggleFullScreen}
        >
          <img src={imageUrl} alt="Full Screen Image" />
        </FullScreen>
      )}
    </div>
  );
};

export default ImagePreview;
