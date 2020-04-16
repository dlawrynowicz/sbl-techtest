import React from "react";
import "./Card.scss";
import { Icon } from "components";

const formatRunningTime = minutes => `${minutes} mins`;

const Card = ({ id, title, url, image, runningTime }) => {
  return (
    <div className="card-item" key={id}>
      <div
        className="image-container"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {runningTime ? (
        <div className="running-time">
          <Icon className="icon" />
          {formatRunningTime(runningTime)}
        </div>
      ) : null}
      <div className="title-container">
        <a href={url} title={title}>
          {title}
        </a>
      </div>
    </div>
  );
};

export default Card;
