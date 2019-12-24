import React from 'react';
import FilterBlock from '../FilterBlock';
import Card from '../Card';
import * as tickets from '../../tickets.json';
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
  arrival_date: string
}

export default class App extends React.Component<{}, { data: Array<Props> }> {

  state = {
    data: tickets.tickets
  }

  filterData = (newData: Array<Props>) => {
    this.setState({ data: newData });
  }

  render() {
    const { data } = this.state;    

    return (
      <div className="container">
        <div className="col-4" style={{ maxWidth: 350 }}>
          <FilterBlock data={tickets.tickets} filterData={this.filterData} />
        </div>
        <div className="col-8">
          {
            data.map((item, i) => <Card key={i} {...item} />)
          }
        </div>
      </div>
    );
  }
}
