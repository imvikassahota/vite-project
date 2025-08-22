import React, { useState } from "react";
import Input from "./common/Input";
import Label from "./common/Label";

const Login = () => {
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //   const handleEmailChange = (e) => {
  //     const value = e.target.value;
  //     setEmail(value);
  //   };

  //   const handlePasswordChange = (e) => {
  //     const value = e.target.value;
  //     setPassword(value);
  //   };

  const handleSubmit = () => {
    console.log(formValues);
    const usertest = 'new user testrole';
    console.log("testing date with user:",{usertest});
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
      <h1>Login</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Label htmlFor="email">Email</Label>

        <Input
          id="email"
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />

        {/* <input
          type="text"
          name="email"
          id="email"
          //   value={email}
          value={formValues.email}
          //   onChange={handleEmailChange}
          onChange={handleChange}
        /> */}
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <Label htmlFor="password">Password</Label>
        <input
          type="password"
          name="password"
          id="password"
          //   value={password}
          value={formValues.password}
          //   onChange={handlePasswordChange}
          onChange={handleChange}
        />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
