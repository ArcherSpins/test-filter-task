import React, { useState, useEffect } from 'react';
import './style.scss';

type Props = {
  price: number,
  origin: string,
  origin_name: string,
  destination: string,
  destination_name: string,
  departure_time: string,
  arrival_time: string,
  departure_date: string,
  arrival_date: string,
  stops: number
}


export default ({
  data,
  filterData
}: { data: Array<Props>, filterData: (data: Array<Props>) => void }) => {
  const [all, toggleAll] = useState<boolean>(true);
  const [without, toggleWithout] = useState<boolean>(false);
  const [with_1, toggleWith_1] = useState<boolean>(false);
  const [with_2, toggleWith_2] = useState<boolean>(false);
  const [with_3, toggleWith_3] = useState<boolean>(false);

  useEffect(() => {
    if (all) {
      filterData(data);

      return;
    }

    const filter = {
      without: without ? 0 : 0,
      with_1: with_1 ? 1 : 0,
      with_2: with_2 ? 2 : 0,
      with_3: with_3 ? 3 : 0,
    }
    
    filterData(Array.from(data).filter((item) =>
        without && item.stops === Number(filter.without)
            || with_1 && item.stops === Number(filter.with_1)
            || with_2 && item.stops === Number(filter.with_2)
            || with_3 && item.stops === Number(filter.with_3)
      ));
  }, [all, without, with_1, with_2, with_3]);

  return (
    <div className="block">
      <div className="field-block">
        <p className="field-title">Валюта</p>
        <div className="d-flex">
          <button className="button-filter active left">RUB</button>
          <button className="button-filter">USD</button>
          <button className="button-filter right">EUR</button>
        </div>
      </div>
      <div className="field-block">
        <p className="field-title">Количество пересадок</p>
        <div>
          <div className="d-flex align-items-center mb-10">
            <input onChange={() => toggleAll(!all)} checked={all} id="all" type="checkbox" className="filter-checkbox" />
            <label htmlFor="all">Все</label>
          </div>
          <div className="d-flex align-items-center mb-10">
            <input onChange={() => toggleWithout(!all && !without)} checked={without || all} id="without" type="checkbox" className="filter-checkbox" />
            <label htmlFor="without">Без пересадки</label>
          </div>
          <div className="d-flex align-items-center mb-10">
            <input onChange={() => toggleWith_1(!all && !with_1)} checked={with_1 || all} id="with_1" type="checkbox" className="filter-checkbox" />
            <label htmlFor="with_1">Одна пересадка</label>
          </div>
          <div className="d-flex align-items-center mb-10">
            <input onChange={() => toggleWith_2(!all && !with_2)} checked={with_2 || all} id="with_2" type="checkbox" className="filter-checkbox" />
            <label htmlFor="with_2">Две пересадки</label>
          </div>
          <div className="d-flex align-items-center">
            <input onChange={() => toggleWith_3(!all && !with_3)} checked={with_3 || all} id="with_3" type="checkbox" className="filter-checkbox" />
            <label htmlFor="with_3">Три пересадки</label>
          </div>
        </div>
      </div>
    </div>
  );
}
