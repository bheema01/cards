import React from 'react';
import Card from './Card';

const CardList = props => {
  const renderedList = props.contacts.map(contact => {
    return (
      <Card
        key={contact.dob}
        contact={contact}
        onCardSelect={props.onCardSelect}
      />
    );
  });

  if (renderedList.length === 0) {
    return <div>No user found!</div>;
  }
  return (
    <div>
      <p></p>
      <div className="ui seven column grid">{renderedList}</div>
    </div>
  );
};

export default CardList;
