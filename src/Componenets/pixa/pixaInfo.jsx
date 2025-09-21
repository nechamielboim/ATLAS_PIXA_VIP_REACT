import React from 'react';

export default function PixaInfo({ images }) {
  return (
    <div className="text-center mt-3">
      {images.length > 0 ? (
        <div className="d-flex flex-wrap justify-content-center">
          {images.map((img, i) => (
            <div key={i} className="m-2">
              <img src={img.webformatURL} alt={img.tags} className="img-thumbnail" />
            </div>
          ))}
        </div>
      ) : (
        <div
          style={{ width: "5rem", height: "5rem" }}
          className="spinner-border text-primary"
          role="status"
        >
          <span className="sr-only"></span>
        </div>
      )}
    </div>
  );
}
