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

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    terms: "",
  });

  const handleChange = (event) => {
    // get values from the target
    const { name, value, checked } = event.target;
    let inputVal = value; //variable for handle input

    //check input type
    if ((event, name === "terms")) {
      inputVal = checked;
    }

    //check errors input errors
    handleValidation(event, name, inputVal);

    //set values in state
    setFormValues({ ...formValues, [name]: inputVal });
  };

  const handleSubmit = () => {
    // declare error object
    let errorsObj = {};

    // check each field for errors
    errorsObj.firstName = validateFirstName(formValues.firstName);
    errorsObj.lastName = validateLastName(formValues.lastName);
    errorsObj.email = validateEmail(formValues.email);
    errorsObj.password = validatePassword(formValues.password);
    errorsObj.gender = validateGender(formValues.gender);
    errorsObj.terms = validateTerms(formValues.terms);
    setErrors(errorsObj);

    // check if has any error
    const hasErrors = Object.values(errors).some((value) => value);

    // show error or proceed further
    if (hasErrors) {
      console.log("Form errors:", { ...errors });
    } else {
      console.log("Form data:", { ...formValues });
    }
  };
  const handleValidation = (event, name, value) => {
    let errorMessage = "";
    switch (name) {
      case "firstName":
        errorMessage = validateFirstName(value);
        break;
      case "lastName":
        errorMessage = validateLastName(value);
        break;
      case "email":
        errorMessage = validateEmail(value);
        break;
      case "password":
        errorMessage = validatePassword(value);
        break;
      case "gender":
        errorMessage = validateGender(value);
        break;
      case "terms":
        errorMessage = validateTerms(value);
        break;
      default:
        errorMessage = "";
        break;
    }
    // set errors in state
    setErrors({ ...errors, [name]: errorMessage });
  };

  const validateFirstName = (value) => {
    let errorMessage = "";
    if (!value) {
      errorMessage = `FirstName is required.`;
    } else if (!value.match(/^[a-zA-Z]+$/)) {
      errorMessage = `Only letters are allowed`;
    }
    return errorMessage;
  };
  const validateLastName = (value) => {
    let errorMessage = "";
    if (!value) {
      errorMessage = `LastName field is required.`;
    } else if (!value.match(/^[a-zA-Z]+$/)) {
      errorMessage = `Only letters are allowed`;
    }
    return errorMessage;
  };
  const validateEmail = (value) => {
    let errorMessage = "";
    if (!value) {
      errorMessage = `Email is Required.`;
    } else if (
      !value
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
      errorMessage = `Please enter valid Email.`;
    }
    return errorMessage;
  };
  const validatePassword = (value) => {
    let errorMessage = "";
    if (!value) {
      errorMessage = `Password is Required.`;
    } else if (!value.match(/^\w{4,}$/)) {
      errorMessage = `Password should be atleast 4 characters long.`;
    }
    return errorMessage;
  };
  const validateGender = (value) => {
    let errorMessage = "";
    if (!value) {
      errorMessage = `Please select Gender.`;
    }
    return errorMessage;
  };
  const validateTerms = (value) => {
    let errorMessage = "";
    if (!value) {
      errorMessage = `Please agree to terms & conditons.`;
    }
    return errorMessage;
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
          placeholder="First Name"
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
          placeholder="Last Name"
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
          placeholder="Email"
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
          placeholder="Password"
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
