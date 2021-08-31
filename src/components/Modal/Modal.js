import React from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

class Modal extends React.Component {
  componentDidMount() {
    document.addEventListener("keydown", this.onEsc);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.onEsc);
  }

  onEsc = (e) => {
    if (e.code === "Escape") {
      e.preventDefault();
      this.props.closeModal();
    }
  };

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { images, imgId } = this.props;
    const imageId = images.find((image) => {
      return +image.id === +imgId;
    });
    return (
      <div className={styles.Overlay} onClick={this.handleBackdropClick}>
        <div className={styles.Modal}>
          <img
            className={styles.ModalImage}
            src={imageId.largeImageURL}
            alt=""
          />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
