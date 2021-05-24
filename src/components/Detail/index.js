import React, { Component } from 'react';
import firebase from '../firebase/firebase';
import { Link } from 'react-router-dom';
import { ImageDetails, ImageContainer, ContainerDetails, H3, Linken, Small } from './style'

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      board: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          board: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('boards').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
    });
  }

  render() {
    return (
      <ContainerDetails>
        <h3>{this.state.board.Name}</h3>
        <ImageContainer>
          <ImageDetails src={this.state.board.image}/>
        </ImageContainer>
        <H3>Nationality: {this.state.board.nationality}</H3>
        <H3>Description: {this.state.board.description}</H3>
        <H3>Information: <Small>{this.state.board.information}</Small></H3>
        <H3>GitHub: <Linken href={this.state.board.GitHub}>{this.state.board.GitHub}</Linken></H3>
      </ContainerDetails>
    );
  }
}

export default Show;
