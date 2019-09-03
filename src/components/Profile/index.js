import React, { Component } from 'react';
import { UserContext } from 'contexts';
import SignInModal from 'components/SignInModal';

export default class Profile extends Component {
  static contextType = UserContext;

  state = {
    showOptions: false,
    showModal: false,
  };

  toggleProfileOptionsView = () =>
    this.setState(prevState => ({ showOptions: !prevState.showOptions }));

  openModal = () => this.setState({ showModal: true });

  closeModal = () => this.setState({ showModal: false });

  renderProfileOptions = () => {};

  render() {
    const { showModal } = this.state;
    const { userName, updateUser } = this.context;
    const buttonText = userName === undefined ? 'Sign In' : userName;
    const onClick =
      userName === undefined ? this.openModal : this.toggleProfileOptionsView;

    return (
      <div>
        <button type="button" className="link" onClick={onClick}>
          {buttonText}
        </button>
        <SignInModal
          isOpen={showModal}
          onSubmit={updateUser}
          onClose={this.closeModal}
        />
      </div>
    );
  }
}
