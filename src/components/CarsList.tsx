import React from "react";
import { useSelector } from "react-redux";
import { ICar } from "../models/ICar";
import { RootState } from "../store";
import { Car } from "./Car";

export const CarsList = () => {
  const { carItems, filter } = useSelector((state: RootState) => state.carsReducer);
  let filteredItem = carItems;
  filteredItem = filter.classType ? filteredItem.filter((car) => car.carClass === filter.classType) : filteredItem;
  filteredItem = filter.minSpeed
    ? filteredItem.filter((car) => filter.minSpeed && car.speed >= filter.minSpeed)
    : filteredItem;
  filteredItem = filter.maxSpeed
    ? filteredItem.filter((car) => filter.maxSpeed && car.speed <= filter.maxSpeed)
    : filteredItem;
  filteredItem = filter.color ? filteredItem.filter((car) => car.color === filter.color) : filteredItem;

  return (
    <div className="cars">
      {filteredItem.map((c: ICar) => (
        <Car key={c.id} car={c}></Car>
      ))}
    </div>
  );
};
