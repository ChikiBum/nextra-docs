npm install react react-dom



Use the ImagePreview component in your app:
import React from 'react';
import ReactDOM from 'react-dom';
import ImagePreview from './ImagePreview';

const App = () => {
  return (
    <div>
      <h1>Image Preview Example</h1>
      <ImagePreview src="path_to_your_image.jpg" alt="Description of image" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
