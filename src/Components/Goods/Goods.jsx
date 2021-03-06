import React from "react";
import TileItem from "../Tiles/TileItem";
import { Container, Row, Alert, Button } from "react-bootstrap";
import TileList from "../Tiles/TileList";

const Goods = ({ goods, deleteGoods, setGoodsView }) => {
  return (
    <Container>
      <TileList goods={goods} deleteGoods={deleteGoods} />
      <Row>
        <TileItem
          goods={goods.slice(goods.length - (goods.length % 4), goods.length)}
          gridMarkup={"remaining"}
          deleteGoods={deleteGoods}
          setGoodsView={setGoodsView}
        />
      </Row>
    </Container>
  );
};

export default Goods;
