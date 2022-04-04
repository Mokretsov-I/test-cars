import React from "react";
import { ICar } from "../models/ICar";

interface CarProps {
  car: ICar;
}

export const Car: React.FC<CarProps> = ({ car }) => {
  const classArr: any = {
    motorcycle: "🏍",
    bus: "🚌",
    truck: "🚚",
    car: "🚗",
  };

  return (
    <div className="car">
      <div className="car__date">{new Date(car.timestamp).toLocaleString()}</div>
      <div className="car__type">
        <span style={{ textShadow: `0px 0px 0px ${car.color}` }}>{classArr[car.carClass]}</span>
      </div>

      <div className="car__plate">{car.plate}</div>

      <div className="car__speed">🚀 {car.speed}</div>
    </div>
  );
};
