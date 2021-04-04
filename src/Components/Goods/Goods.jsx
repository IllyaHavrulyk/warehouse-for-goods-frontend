import React, { useState } from "react";
import TileItem from "../Tiles/TileItem";
import { Container, Row, Alert, Button } from "react-bootstrap";
import TileList from "../Tiles/TileList";
import PriceFilterContainer from "../PriceFilter/PriceFilterContainer";
import style from "./Goods.module.css";
import FoundGoods from "../FoundGoods/FoundGoods";

const Goods = ({ goods, deleteGoods, isSearch, isFilter, deleteSearch, deleteFilter, changeQuantityForGoods, warehouseId }) => {
  const [isVisiblePriceFilter, setIsVisiblePriceFilter] = useState(false);
  const onClosePriceFilter = () => {
    setIsVisiblePriceFilter(false);
  }

  if (isSearch) {
    return (
      <FoundGoods
        changeQuantityForGoods={changeQuantityForGoods}
        deleteSearch={deleteSearch}
        deleteGoods={deleteGoods}
        foundGoods={goods}
      />
    );
  }
  return (
    <Container>
      <div className={style.filterButton}>
        <Button onClick={() => { setIsVisiblePriceFilter(true) }} >filter</Button>
        {isFilter &&
          <Button onClick={() => { deleteFilter(); }} variant="danger">delete filter</Button>
        }
      </div>
      {isVisiblePriceFilter &&
        <PriceFilterContainer
          onClosePriceFilter={onClosePriceFilter}
        />
      }
      <TileList
        warehouseId={warehouseId}
        changeQuantityForGoods={changeQuantityForGoods}
        goods={goods}
        deleteGoods={deleteGoods}
      />
      <Row>
        <TileItem
          warehouseId={warehouseId}
          changeQuantityForGoods={changeQuantityForGoods}
          goods={goods.slice(goods.length - (goods.length % 4), goods.length)}
          gridMarkup={"remaining"}
          deleteGoods={deleteGoods}
        />
      </Row>
    </Container>
  );
};

export default Goods;
