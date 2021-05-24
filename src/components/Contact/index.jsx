import React, { Component } from 'react';
import { toast } from 'react-toastify';
import firebase from '../firebase/firebase';
import {Title, ContainerContact, Input, Button, InputMessage} from './style'
toast.configure();

class index extends Component {
  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = this.state;

    this.ref.add({
      name,
      email,
      phone,
      message, 
    }).then((docRef) => {
      this.setState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }
    render() {
        const {name, email, phone, message} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <Title>CONTACT</Title>
                <ContainerContact>
                <h2>PERSONAL INFO</h2>
                <h3>Name</h3>
                  <Input type="text" placeholder='Full name*' value={name} name='name' onChange={this.onChange} required/> 
                  <h3>Email</h3>
                  <Input type="text" placeholder='Email*' value={email} name='email' onChange={this.onChange} required/>
                  <h3>Phone</h3>
                  <Input type="text" placeholder='Phone' value={phone} name='phone' onChange={this.onChange} required/>
                  <h3>Message</h3>
                  <InputMessage type="text"  value={message} name='message' onChange={this.onChange} required/>
                  <Button type='submit'>Submit</Button>
                </ContainerContact>
            </form>
        );
    }
}
export default (index);
