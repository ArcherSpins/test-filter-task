import React from 'react';

type Props = {
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
  origin,
  origin_name,
  destination,
  destination_name,
  departure_time,
  arrival_time,
  departure_date,
  arrival_date
}: Props) => (
  <div className="d-flex junsify-content-between">
    <div>
      <h2 className="title-time">{departure_time}</h2>
      <p className="time-subtitle">{origin}, {origin_name}</p>
      <p className="time-date">{departure_date}</p>
    </div>
    <div>
      <h2 className="title-time">{arrival_time}</h2>
      <p className="time-subtitle">{destination_name}, {destination}</p>
      <p className="time-date">{arrival_date}</p>
    </div>
  </div>
)
