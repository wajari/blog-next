import React from "react";
import { Provider, useSelector, useDispatch } from 'react-redux'

export default function Theme() {
    const dispatch = useDispatch()
    const tema = useSelector((s) => s.tema);
    const setTema = (tema) => dispatch({ type: "tema", tema });
    const handleClick = () => setTema(tema === "dark" ? "light" : "dark");

  return (
    <div className='theme'>
        <button onClick={handleClick}>Cambiar tema: {tema}</button>
    </div>
  );
}