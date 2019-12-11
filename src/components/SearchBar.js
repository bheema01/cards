import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: 'contact search'
    };
  }
  onSearch = e => {
    this.setState({ contact: e.target.value });
  };

  onSubmitHandler = e => {
    e.preventDefault();
    this.props.onSearchForm(this.state.contact);
  };

  render() {
    return (
      <div className="ui form">
        <form className="ui form" onSubmit={this.onSubmitHandler}>
          <div className="field">
            <label htmlFor="searchContacts">
              Search Contacts
              <input
                type="text"
                name="searchContacts"
                value={this.state.contact}
                onChange={e => this.onSearch(e)}
              />
            </label>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
