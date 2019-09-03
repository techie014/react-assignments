import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const appElement = document.getElementById('root');

export default class SignInModal extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    onSubmit: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  onClose = event => {
    event.preventDefault();
    this.props.onClose();
  };

  handleModalClick = event => event.stopPropagation();

  renderModal = () => {
    const { onSubmit, onClose, isOpen } = this.props;

    return (
      <div
        className={`sign-in-modal-overlay ${isOpen ? '' : 'closed'}`}
        onClick={onClose}
      >
        <div className="modal-content" onClick={this.handleModalClick}>
          <form>
            <div className="login-header">
              <span className="login-banner">Login</span>
            </div>
            <div className="input-container">
              <label className="default-font">Username</label>
              <input />
            </div>
            <div className="input-container">
              <label className="default-font">Password</label>
              <input />
            </div>
            <div className="button-container">
              <button type="submit" className="submit" onClick={onSubmit}>
                Submit
              </button>
              <button type="button" className="link" onClick={onClose}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  render() {
    return ReactDOM.createPortal(this.renderModal(), appElement);
  }
}
