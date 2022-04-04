import React, { useCallback, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { CarsFilter } from "../components/CarsFilter";
import { CarsList } from "../components/CarsList";
import { addCar } from "../store/reducers/Cars";

export const CarsPage = () => {
  const dispatch = useDispatch();
  const ws = useRef<WebSocket | null>(null);

  const gettingData = useCallback(() => {
    if (!ws.current) return;

    ws.current.onmessage = (event) => {
      dispatch(addCar(JSON.parse(event.data)));
    };
  }, [dispatch]);

  useEffect((): any => {
    ws.current = new WebSocket("ws://localhost:5001/");
    gettingData();
    return () => ws.current && ws.current.close();
  }, [ws, gettingData]);

  return (
    <div className="cars-page">
      <CarsFilter />
      <CarsList />
    </div>
  );
};
