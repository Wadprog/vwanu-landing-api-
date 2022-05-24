import React from "react";
import { Row, Col } from "reactstrap";
import SingleImage from "./Gallery/SingleImage";
import { picture } from "../data/picture";
import useCollection from "../hooks/useCollection";
import ImageComponent from "./Img";

const Gallery = () => {
  const { documents, error, isLoading } = useCollection("test");

  if (error) return <p>error</p>;

  return (
    <Row>
      {!isLoading ? (
        <>
          {documents?.map((doc) => (
            <ImageComponent src={doc.fileUrl} />
          ))}
        </>
      ) : (
        <p>Loading</p>
      )}
    </Row>
  );
};

export default Gallery;
