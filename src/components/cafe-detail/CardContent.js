import React from "react";
import "./CafeDetails.css";
export const CardContent = ({ data }) => {
  return (
    <>
      <div className="episode-tags">
        <span className="tags tags--name">{data.name}</span>
      </div>
      <p className="episode-data">
        <b>
          <i>City:</i>
        </b>{" "}
        {data.city}
      </p>
      <p className="episode-data">
        <b>
          <i>Pincode:</i>
        </b>{" "}
        {data.pincode}
      </p>
      <p className="episode-data">
        <b>
          <i>Cafe Offers:</i>
        </b>{" "}
        {data.drink}
      </p>
    </>
  );
};
