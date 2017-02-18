import React from 'react';

export default class ContactInfo extends React.Component {
  render() {
    return (
      <div className="con_name" onClick={this.props.onClick}>{this.props.contact.name}</div>
    );
  }
}
