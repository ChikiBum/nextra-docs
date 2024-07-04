import React, { useState } from 'react';
import './ImagePreview.css';

const ImagePreview = ({ src, alt }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const handleImageClick = () => {
    setIsPreviewOpen(!isPreviewOpen);
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        className="thumbnail"
        onClick={handleImageClick}
        style={{ cursor: 'pointer' }}
      />
      {isPreviewOpen && (
        <div className="overlay" onClick={handleImageClick}>
          <img src={src} alt={alt} className="preview" />
        </div>
      )}
    </>
  );
};

export default ImagePreview;
