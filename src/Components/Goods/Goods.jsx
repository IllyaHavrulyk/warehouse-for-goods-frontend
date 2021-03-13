import React, { useState } from "react";
import TileItem from "../Tiles/TileItem";
import { Container, Row, Alert, Button } from "react-bootstrap";
import TileList from "../Tiles/TileList";
import PriceFilterContainer from "../PriceFilter/PriceFilterContainer";
import style from "./Goods.module.css";

const Goods = ({ goods, deleteGoods, setGoodsView }) => {
  const [isVisiblePriceFilter, setIsVisiblePriceFilter] = useState(false);
  const onClosePriceFilter = () => {
    setIsVisiblePriceFilter(false);
  }
  return (
    <Container>
      <div className={style.filterButton}>
        <Button onClick={() => { setIsVisiblePriceFilter(true) }} >filter</Button>
      </div>
      {isVisiblePriceFilter &&
        <PriceFilterContainer
          onClosePriceFilter={onClosePriceFilter}
        />
      }
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
