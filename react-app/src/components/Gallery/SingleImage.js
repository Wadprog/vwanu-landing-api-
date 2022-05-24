import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap";
import Image from "../Gallery/Image";

const SingleImage = ({
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
  // Modal open state
  const [modal, setModal] = useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  return (
    <div className="col-sm-4 my-2">
      <Button className="btn" color="light" outline onClick={toggle}>
        <Image src={src} width={width} height={height} />
      </Button>
      <Modal fullscreen isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={function noRefCheck() {}}>Modal title</ModalHeader>
        <ModalBody>
          <img alt={alt} src={src} width={width} />
          <div>
            <hr />
            <p className="">
              Title: <span className="">{title}</span>
            </p>
            <p className="">
              Vendor: <span className="">{vendor}</span>
            </p>
            <p className="">
              Price: <span className="">{"$ " + price}</span>
            </p>
            <p className="">
              Date: <span className="">{date}</span>
            </p>
            <p className="">
              Format: <span className="">{format}</span>
            </p>
            <p className="">
              Size: <span className="">{size}</span>
            </p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={function noRefCheck() {}}>
            Download
          </Button>{" "}
          <Button onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default SingleImage;
