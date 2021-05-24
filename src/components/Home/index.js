import React, { Component } from 'react';
import  firebase  from '../firebase/firebase';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';
import { Image, Card, P, H2, H4, ImageC, ImageCard, LinkTitle,  Linken } from './style'
class index extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { name, description, nationality, image, information, GitHub } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        name,
        description,
        nationality,
        image,
        information,
        GitHub
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div class="container">
        <H2>Program Committee</H2>
          {
            this.state.boards.map((board)=>(
            <Card>
              <Link to={`/show/${board.key}`}>
                <ImageCard>
                  <ImageC src={board.image} alt="productImage" />
                </ImageCard>
                <LinkTitle>{board.name}</LinkTitle>
                <H4>{board.nationality}</H4>
                <Linken href={board.GitHub} className='fa fa-github' style={{fontSize: '2.4vw'}}></Linken>
              </Link>
            </Card>
            ))
          }
      </div>
    );
  }
}

export default index;


