import { ICard } from "../../models";
import "./card.scss";
export default function Card({ icon, title, value }: ICard) {
  return (
    <div className="card">
      <div className="card_top">
        <div className="card_icon">
          <img src={icon} alt="" />
        </div>
        <div className="card_title">
          <span>{title}</span>
        </div>
      </div>
      <div className="card_value">
        <span>{value}</span>
      </div>
    </div>
  );
}
