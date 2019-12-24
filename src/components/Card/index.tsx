import React from 'react';
import TimeBlock from '../TimeBlock';

type Props = {
  price: number,
  origin: string,
  origin_name: string,
  destination: string,
  destination_name: string,
  departure_time: string,
  arrival_time: string,
  departure_date: string,
  arrival_date: string
}

export default ({
  price,
  ...restProps
}: Props) => (
  <div className="block card">
    <div className="d-flex justify-content-between">
      <div className="col-4 p-0 border-right" style={{ maxWidth: 180 }}>
        <h4 className="mb-10 title-card">Turkish</h4>
        <button className="buy-button">
          Купить <br /> за  {price}
        </button>
      </div>
      <div className="col-8 p-0">
        <TimeBlock {...restProps} />
      </div>
    </div>
  </div>
);
