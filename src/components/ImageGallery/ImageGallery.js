import React from "react";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import styled from "./ImageGallery.module.css";
import PropTypes from "prop-types";

const ImageGallery = ({ images, onClick, innerRef }) => {
  if (!Array.isArray(images)) {
    return null;
  }
  return (
    <ul className={styled.ImageGallery} ref={innerRef}>
      {images.map((image) => {
        return (
          <ImageGalleryItem images={image} onClick={onClick} key={image.id} />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onClick: PropTypes.func.isRequired,
  innerRef: PropTypes.object.isRequired,
};

export default ImageGallery;
