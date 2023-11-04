import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import RowItems from "./RowItems";
import { productData, responsive } from "./RowData";

const RowSlider = () => {
  const product = productData.map((item) => (
    <RowItems
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
    />
  ));

  return (
    <div className="RowSlider">
      <Carousel showDots={true} responsive={responsive}>
        {product}
      </Carousel>
    </div>
  );
}

export default RowSlider