import React from 'react';
import Axios from 'axios';
import CardList from './cardList';
import Modal from './Modal';
import SearchBar from './SearchBar';

class App extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      contacts: [],
      isModalState: false,
      contact: null
    };
  }

  componentDidMount() {
    this.onSearchForm('');
  }

  onCardSelect = contact => {
    this.setState({ isModalState: true, contact });
  };

  onSearchForm = async contact => {
    const response = await Axios.get('http://localhost:3001/cards', {
      params: {
        name_like: contact,
        _limit: 300
      }
    });
    this.setState({ contacts: response.data });
  };

  onCloseModal = () => {
    this.setState({ isModalState: false });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onSearchForm={this.onSearchForm} />
        <CardList
          contacts={this.state.contacts}
          onCardSelect={this.onCardSelect}
        />
        {this.state.isModalState && (
          <Modal
            onCloseModal={this.onCloseModal}
            contact={this.state.contact}
          />
        )}
      </div>
    );
  }
}

export default App;
