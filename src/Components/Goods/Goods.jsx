import React from "react";
import TileItem from "../Tiles/TileItem";
import { Container, Row, Col } from "react-bootstrap";
import TileList from "../Tiles/TileList";

const Goods = ({ goods, deleteGoods }) => {
  return (
    <Container>
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
