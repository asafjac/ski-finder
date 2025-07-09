import React from "react";
import { MapPin, Star } from "lucide-react";
import "./resort-card.scss";

interface ResortCardProps {
  title: string;
  location: string;
  price: number;
  rating: number;
  maxRating?: number;
  imageUrl: string;
}

const ResortCard: React.FC<ResortCardProps> = ({
  title,
  location,
  price,
  rating,
  maxRating = 5,
  imageUrl,
}) => {
  const renderStars = () => {
    return Array.from({ length: maxRating }, (_, index) => (
      <Star
        key={index}
        className={`star ${index < rating ? "star--filled" : "star--empty"}`}
        size={14}
      />
    ));
  };

  return (
    <div className="resort-card">
      <div className="resort-card__image-container">
        <img src={imageUrl} className="resort-card__image" />
      </div>

      <div className="resort-card__content">
        <div className="resort-card__header">
          <h3 className="resort-card__title">{title}</h3>
        </div>
        <div className="resort-card__rating">{renderStars()}</div>

        <div className="resort-card__location">
          <MapPin className="resort-card__location-icon" size={14} />
          <span className="resort-card__location-text">{location}</span>
        </div>

        <div className="resort-card__price">
          <span className="resort-card__price-amount">
            £{price.toLocaleString()}
          </span>
          <span className="resort-card__price-unit">/per person</span>
        </div>
      </div>
    </div>
  );
};

export default ResortCard;
