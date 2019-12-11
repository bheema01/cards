import React from 'react';
import ReactDOM from 'react-dom';

const modalStyle = {
  maxWidth: '128px'
};

const Modal = props => {
  return ReactDOM.createPortal(
    <div
      onClick={e => props.onCloseModal()}
      className="ui page dimmer modals visible active"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
        style={modalStyle}
      >
        <div className="ui card">
          <div className="image" />
          <img
            src={props.contact.avatar}
            alt={props.contact.name}
            style={modalStyle}
          />
          <div className="content">
            <a className="header">{props.contact.name}</a>
            <div className="meta">
              {/* <span className="email">{props.contact.email}</span> */}
              <span className="email">{props.contact.phone}</span>
            </div>
            <div className="description">
              {props.contact.company.catchPhrase}
            </div>
          </div>
          <div className="extra content">
            <a>
              <i className="user icon"></i>
              {props.contact.website}
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
