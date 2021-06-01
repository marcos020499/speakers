import React, { useEffect, useState } from "react";
import firebase from "../firebase/firebase";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import {
  Image,
  Card,
  P,
  H2,
  H4,
  ImageC,
  ImageCard,
  LinkTitle,
  Linken,
} from "./style";

const useItems = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    firebase
      .firestore() 
      .collection("boards") 
      .onSnapshot((snapshot) => { 
        const listItems = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(listItems); 
      });
  }, []);
  return items;
};
const ItemList = () => {
  const listItem = useItems();
  return (
    <div class="container">
      <H2>Program Committee</H2>
      {listItem.map((board) => (
        <Card key={board.id}>
          <Link to={`/show/${board.id}`}>
            <ImageCard>
              <ImageC src={board.image} alt="productImage" />
            </ImageCard>
            <LinkTitle>{board.name}</LinkTitle>
            <H4>{board.nationality}</H4>
            <Linken href={board.GitHub} className="fa fa-github"></Linken>
          </Link>
        </Card>
      ))}
    </div>
  );
};
export default ItemList;
