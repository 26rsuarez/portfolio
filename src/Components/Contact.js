import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact" className="text-center">
            <p className="lead">{message}</p>
            <h4>Contact</h4>
            <p className="address">
               {name}<br />
               <span>{email}</span>
            </p>
   </section>
    );
  }
}

export default Contact;
