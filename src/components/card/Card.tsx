import React from "react";
import "./card.css";

interface CardProps {
  title: string;
  icon: any;
  value: number;
}

export default function Card({ icon, title, value }: CardProps) {
  return (
    <div className="card">
      <div className="card_icon">
        <img src={icon} alt="" />
      </div>
      <div className="card_title">
        <span>{title}</span>
      </div>
      <div className="card_value">
        <span>{value}</span>
      </div>
    </div>
  );
}
