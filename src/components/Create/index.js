import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../firebase/firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      GitHub: '',
      description: '',
      image: '',
      information: '',
      name: '',
      nationality: '',
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { GitHub, description, image, information, name, nationality } = this.state;

    this.ref.add({
      GitHub,
      description,
      image,
      information, 
      name, 
      nationality
    }).then((docRef) => {
      this.setState({
        GitHub: '',
        description: '',
        image: '',
        information: '',
        name: '',
        nationality: '',
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { GitHub, description, image, information, name, nationality } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD BOARD
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Book List</Link></h4>
            <form onSubmit={this.onSubmit}>
            <div class="form-group">
                <label for="GitHub">Github:</label>
                <input type="text" class="form-control" name="GitHub" value={GitHub} onChange={this.onChange} placeholder="GitHub" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <input type="text" class="form-control" name="description" value={description} onChange={this.onChange} placeholder="Description" />
              </div>
              <div class="form-group">
                <label for="image">Image:</label>
                <input type="text" class="form-control" name="image" value={image} onChange={this.onChange} placeholder="Image" />
              </div>
              <div class="form-group">
                <label for="information">Information:</label>
                <input type="text" class="form-control" name="information" value={information} onChange={this.onChange} placeholder="Information" />
              </div>
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
              </div>
              <div class="form-group">
                <label for="nationality">Nationality:</label>
                <input type="text" class="form-control" name="nationality" value={nationality} onChange={this.onChange} placeholder="Nationality" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Create;
