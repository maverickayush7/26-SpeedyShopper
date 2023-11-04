import React from "react";
import "./Card.css";

export const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  link,
}) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      {title && <h1 className="card-title">{title}</h1>}
      <div className="card-description">
        {Array.isArray(description) && description.length > 0 ? (
          <ul>
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{description}</p>
        )}
      </div>
      <div className="card-content">
        {buttonText && link && (
          <a href={link} className="card-btn">
            {buttonText}
          </a>
        )}
      </div>
    </div>
  );
};
