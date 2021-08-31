import React from "react";
import styled from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ images, onClick }) => {
  const { webformatURL, tags, id } = images;
  return (
    <li className={styled.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(id)}
        className={styled.ImageGalleryItemImage}
        width="300"
        height="200"
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  images: PropTypes.object.isRequired,
};

export default ImageGalleryItem;
