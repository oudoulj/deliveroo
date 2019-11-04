import React, { useState, useEffect } from "react";

const MenuItem = props => {
  const { title, description, price, picture, popular } = props;
  return (
    <div className="MenuItem">
      <div className="MenuItem--card">
        <div className="MenuItem--texts">
          <h3>{title}</h3>
          <p>{description}</p>
          <div className="MenuItem--infos">
            <span className="MenuItem--price">{price}</span>
            {popular ? (
              <span className="MenuItem--popular">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ff8000"
                  className="feather feather-star"
                  style={{ width: "20px", height: "20px", marginRight: "5px" }}
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>{" "}
                Populaire
              </span>
            ) : null}
          </div>
        </div>
        <div className="MenuItem--picture">
          <img src={picture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
