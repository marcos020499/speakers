import React, { useState, useEffect } from "react";
import firebase from "../firebase/firebase";
import { Link, useParams } from "react-router-dom";
import {
  ImageDetails,
  ImageContainer,
  ContainerDetails,
  H3,
  Linken,
  Small,
} from "./style";

const Show = () => {
  const [loading, setLoading] = useState(true);
  const [speakers, setSpeakers] = useState({});
  const [image, setImage] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await firebase
          .firestore()
          .collection("boards")
          .doc(id)
          .get();
        console.log("response", response);
        let data = { title: "not found" };
        if (response.exists) {
          data = response.data();
        }
        setSpeakers(data);
        setImage(data.image);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);
  return (
    <ContainerDetails>
      <h3>{speakers.Name}</h3>
      <ImageContainer>
        <ImageDetails src={image} />
      </ImageContainer>
      <H3>
        Nationality: <Small>{speakers.nationality}</Small>
      </H3>
      <H3>
        Description: <Small>{speakers.description}</Small>{" "}
      </H3>
      <H3>
        Information: <Small>{speakers.information}</Small>
      </H3>
      <H3>
        GitHub: <Linken href={speakers.GitHub}>{speakers.GitHub}</Linken>
      </H3>
    </ContainerDetails>
  );
};

export default Show;
