import React, { useEffect, useState } from "react";
import "./CafeDetails.css";
import { db, collection, getDocs } from "../../Firebase";
import { CardContent } from "./CardContent";

function CafeDetail() {
  const [state, setState] = useState([]);
  useEffect(() => {
    getData(db);
  }, []);
  const getData = async (db) => {
    const database = collection(db, "Cafe");
    const cafeSnapshot = await getDocs(database);
    const data = cafeSnapshot.docs.map((doc, idx) => {
      const { name, city, pincode, drink } = doc.data();
      return {
        key: doc.id,
        name,
        city,
        pincode,
        drink,
      };
    });
    setState(data);
  };

  return (
    <div className="container">
      {state &&
        Array.isArray(state) &&
        state.map((data) => {
          return (
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <CardContent data={data} />
                </div>
                <div class="flip-card-back">
                  <CardContent data={data} />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default CafeDetail;
