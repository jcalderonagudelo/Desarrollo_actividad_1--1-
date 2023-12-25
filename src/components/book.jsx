import { Link } from "react-router-dom";
import React from "react";
import "./book.css";

export default function Book({ item }) {
  return (
    <div className="book">
      <Link to={`/view/${item.id}`} className="book__info">
        <img src={item.cover} alt={item.title} className="book__cover" />
        <div className="book__title">{item.title}</div>
      </Link>
    </div>
  );
}
