import React from "react";
import TileItem from "../Tiles/TileItem";
import { Container, Row, Alert, Button } from "react-bootstrap";
import TileList from "../Tiles/TileList";

const Goods = ({ goods, deleteGoods, error, isError, setIsErrorEndError }) => {
  const onClose = () => {
    setIsErrorEndError(false, null);
  }
  return (
    <Container>
      <Alert show={isError} variant="danger">
        <Alert.Heading>{error}</Alert.Heading>
        <p>
          An error occurred, check your internet connection and reload the page
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => onClose()} variant="outline-success">
            Ok
          </Button>
        </div>
      </Alert>
      <TileList goods={goods} deleteGoods={deleteGoods} />
      <Row>
        <TileItem
          goods={goods.slice(goods.length - (goods.length % 4), goods.length)}
          gridMarkup={"remaining"}
          deleteGoods={deleteGoods}
        />
      </Row>
    </Container>
  );
};

export default Goods;
