import React, { useState } from "react";
import FormInput from "./FormInput";
import { db, collection, addDoc } from "../../Firebase";

import "./Form.css";

function Form() {
  const [state, setState] = useState({
    name: "",
    city: "",
    pincode: "",
    number: "",
  });

  const setCoffeOffer = (event) => {
    console.log(event.target.value);
    setState({ ...state, number: event.target.value });
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setState({ ...state, [name]: value });
  };

  const handleSubmit = () => {
    const { name, city, pincode, number } = state;
    const database = addDoc(collection(db, "Cafe"), {
      name,
      city,
      pincode,
      drink: number,
    })
      .then((docRef) => {
        setState({
          ...state,
          name: "",
          city: "",
          pincode: "",
          number: "",
        });
        console.log("Added Succeffully");
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const { name, city, pincode, number } = state;

  return (
    <div className="cafe-form">
      <h2 className="headerTitle">Cafe</h2>

      <div>
        <FormInput
          onChange={(e) => onChangeHandler(e)}
          name="name"
          value={name}
          description="Cafe Name"
          placeholder="Enter Cafe Name"
          type="text"
        />
        <FormInput
          onChange={(e) => onChangeHandler(e)}
          name="city"
          value={city}
          description="City"
          placeholder="Enter your City"
          type="text"
        />
        <FormInput
          onChange={(e) => onChangeHandler(e)}
          name="pincode"
          value={pincode}
          description="Pincode"
          placeholder="Enter your city pincode"
          type="text"
        />

        <div className="coffe-offer">
          <label>Cafe Offers: </label>
          <div className="coffe-button">
            <input
              className="coffee-input"
              type="radio"
              checked={number == "less than 5 drinks"}
              onClick={(e) => setCoffeOffer(e)}
              value="less than 5 drinks"
            />{" "}
            less than 5 drinks
            <input
              className="coffee-input"
              type="radio"
              checked={number == "more"}
              onClick={(e) => setCoffeOffer(e)}
              value="more"
            />{" "}
            more
          </div>
        </div>

        <div id="button" class="row">
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Form;
