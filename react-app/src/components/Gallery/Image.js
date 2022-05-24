import React from "react";
import { Card, CardBody, Button, CardImg, CardGroup } from "reactstrap";

const Image = ({
  id,
  src,
  width,
  height,
  alt,
  title,
  vendor,
  price,
  date,
  format,
  size,
}) => {
  return (
    <div class="">
      <Card>
        <CardBody>
          <CardImg alt={alt} src={src} top width={width} />
        </CardBody>
      </Card>
    </div>
  );
};

export default Image;
