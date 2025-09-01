import React, { useState } from "react";
import Label from "./common/Label";
import Input from "./common/Input";
import Select from "./common/Select";
import Option from "./common/Option";

const genders = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const Register = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    terms: true,
  });
  const [errors, setErrrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    terms: "",
  });
  const handleChange = (e) => {
    const _ = handleValidation(e);
    const { name, value, checked } = e.target;
    var inputVal = value;
    if (name === "terms") {
      inputVal = checked;
    }
    setFormValues({ ...formValues, [name]: inputVal });
  };
  const handleValidation = (e) => {
    const { name, value, checked } = e.target;
    let inputVal = value;
    let errorMessage = "";

    if (name === "firstName") {
      if (!inputVal) {
        errorMessage = `${name} is Required.`;
      } else if (!inputVal.match(/^[a-zA-Z]+$/)) {
        errorMessage = `Only Letter are allowed`;
      }
    }
    if (name === "lastName") {
      if (!inputVal) {
        errorMessage = `${name} is Required.`;
      } else if (!inputVal.match(/^[a-zA-Z]+$/)) {
        errorMessage = `Only Letter are allowed`;
      }
    }
    if (name === "email") {
      if (!inputVal) {
        errorMessage = `${name} is Required.`;
      } else if (
        !inputVal
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      ) {
        errorMessage = `${name} is Invalid.`;
      }
    }
    if (name === "password") {
      if (!inputVal) {
        errorMessage = `${name} is Required.`;
      } else if (!inputVal.match(/^\w{4,}$/)) {
        errorMessage = `Minimum ${name} length is 4.`;
      }
    }
    if (name === "gender") {
      if (!inputVal) {
        errorMessage = `Please select ${name}`;
      }
    }
    if (name === "terms") {
      inputVal = checked;
      if (!inputVal) {
        errorMessage = `${name} are required`;
      }
    }
    setErrrors({ ...errors, [name]: errorMessage });
  };
  const handleSubmit = () => {
    console.log("submited Data: ", { ...formValues });
  };

  return (
    <div style={{ dislplay: "flex", flexDirection: "column", gap: "5px" }}>
      <h1>Register</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Label htmlFor="firstName">First Name</Label>
        <Input
          id="firstName"
          type="text"
          name="firstName"
          value={formValues.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p>{errors.firstName}</p>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Label htmlFor="lastName">Last Name</Label>
        <Input
          id="lastName"
          type="text"
          name="lastName"
          value={formValues.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p>{errors.lastName}</p>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Label htmlFor="gender">Gender</Label>
        <Select
          id="gender"
          name="gender"
          type="select"
          value={formValues.gender}
          onChange={handleChange}
        >
          <option value="">Select</option>
          {genders.map((gender, index) => (
            <option key={index} value={gender.value}>
              {gender.label}
            </option>
          ))}
        </Select>
        {errors.gender && <p>{errors.gender}</p>}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <div>
          <Input
            id="terms"
            name="terms"
            type="checkbox"
            checked={formValues.terms}
            onChange={handleChange}
          />{" "}
          Agree to Terms & Conditions
        </div>
        {errors.terms && <p>{errors.terms}</p>}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Register;
