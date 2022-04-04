import React, { ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from "../store/reducers/Cars";

export const CarsFilter = () => {
  const colorArr = ["black", "white", "red", "green", "blue", "yellow", "silver"];
  const classArr = ["motorcycle", "bus", "truck", "car"];
  const dispatch = useDispatch();

  const setSelectFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(event.target.name, event.target.value));
  };
  const setInputFilter = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.name, event.target.value));
  };

  return (
    <div className="cars-filter">
      <div>
        <select name="color" onChange={setSelectFilter} defaultValue="">
          <option disabled value="">
            Цвет
          </option>
          {colorArr.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input type="number" placeholder="Минимальная скорость" name="minSpeed" onChange={setInputFilter} />
        <input type="number" placeholder="Максимальная скорость" name="maxSpeed" onChange={setInputFilter} />
      </div>
      <select name="classType" onChange={setSelectFilter} defaultValue="">
        <option disabled value="">
          Тип
        </option>
        {classArr.map((classType) => (
          <option key={classType} value={classType}>
            {classType}
          </option>
        ))}
      </select>
    </div>
  );
};
