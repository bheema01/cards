import React from 'react';

const cardStyle = {
  maxWidth: '128px'
};

const Card = ({ contact, onCardSelect }) => {
  return (
    <div onClick={() => onCardSelect(contact)} className="column">
      <div className="ui green card" style={cardStyle}>
        <img
          className="ui fluid image"
          src={contact.avatar}
          alt={contact.name}
        />
        <div className="content center aligned">{contact.name}</div>
        {/* <div className="header center aligned">{contact.company.name}</div> */}
      </div>
    </div>
  );
};

export default Card;
