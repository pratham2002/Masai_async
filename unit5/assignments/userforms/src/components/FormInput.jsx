import React from "react";
import { useRef } from "react";
import { useState } from "react";

export const FormInput = ({ handleSubmitForm }) => {
  const imgRef = useRef();
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;
    if (name == "department" && value == "") {
      value = undefined;
    }
    if (type === "checkbox") {
      value = checked;
    }
    if (type === "file") {
      // console.log(imgRef.current.files[0]);
      value = URL.createObjectURL(imgRef.current.files[0]);
    }
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <>
      <div>FormInput</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmitForm(formData);
        }}
      >
        <div>
          <input
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="age"
            type="number"
            placeholder="Age"
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="address"
            type="text"
            placeholder="Address"
            onChange={handleChange}
          />
        </div>
        <div>
          <select name="department" onChange={handleChange}>
            <option value="">Select</option>
            <option value="IT">IT</option>
            <option value="CS">CS</option>
            <option value="BCOM">BCOM</option>
          </select>
        </div>
        <div>
          <input
            name="salary"
            type="text"
            placeholder="Salary"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="isMarried"> Married?</label>
          <input
            type="checkbox"
            onChange={handleChange}
            name="isMarried"
            placeholder="isMarried"
          />
        </div>
        <div>
          <input
            type="file"
            name="profilePic"
            ref={imgRef}
            onChange={handleChange}
          />
          <img
            style={{ width: "150px" }}
            src={formData.profilePic}
            alt="Something"
          />
        </div>
        <div>
          <input type="submit" />{" "}
        </div>
      </form>
    </>
  );
};
