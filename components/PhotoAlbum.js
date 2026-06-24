import { useState } from "react";

export default function PhotoAlbum({ images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      {/* Grille d’images */}
      <div className="album-grid">
        {images.map((src, index) => (
          <div key={index} className="album-item" onClick={() => setSelectedImage(src)}>
            <img src={src} alt={`Photo ${index}`} className="album-thumb" />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Zoom" className="lightbox-image" />
        </div>
      )}
    </div>
  );
}
