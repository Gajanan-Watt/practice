import { Button, InputLabel, MenuItem, Select } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import React, { Component } from "react";

class Form extends Component {
  state = {
    user: {
      name: "",
      email1: "",
      email2: "",
      age: "",
      city: "",
      phone: "",
    },
    invalidNumber: false,
    invalidEmail: false,
    submitted: false,
    invalidFields: [],
  };

  validateNumber = (value, name) => {
    const regex = /^[0-9]\d*$/;
    if (value && !regex.test(value)) {
      this.setState({
        invalidNumber: true,
        invalidFields: [...this.state.invalidFields, name],
      });
    } else {
      this.setState({
        invalidNumber: false,
        invalidFields: this.state.invalidFields.filter((item) => item !== name),
      });
    }
  };

  validateEmail = (value, name) => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (value && !regex.test(value)) {
      this.setState({
        invalidEmail: true,
        invalidFields: [...this.state.invalidFields, name],
      });
    } else {
      this.setState({
        invalidEmail: false,
        invalidFields: this.state.invalidFields.filter((item) => item !== name),
      });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    const { user } = this.state;

    this.setState({
      user: {
        ...user,
        [name]: value,
      },
    });

    if (name === "email1") {
      this.validateEmail(value, name);
    } else if (name === "email2") {
      this.validateEmail(value, name);
    } else if (name === "age") {
      this.validateNumber(value, name);
    } else if (name === "phone") {
      this.validateNumber(value, name);
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { name, age, email1, email2, city, phone } = this.state.user;
    this.setState({
      submitted: true,
    });

    if (
      name !== "" &&
      age !== "" &&
      email1 !== "" &&
      email2 !== "" &&
      city !== "" &&
      phone !== ""
    ) {
      console.log("User created : ", this.state.user);
    } else {
      console.log("Error creating user");
    }
  };

  render() {
    const { submitted, invalidEmail, user } = this.state;
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField
              id="name"
              autoComplete="off"
              type="text"
              name="name"
              value={user.name}
              onChange={this.handleChange}
              placeholder="Name"
            />
            {submitted && !user.name && (
              <div style={{ color: "red" }}>Name is required</div>
            )}
          </div>

          <div>
            {/* <input
              type="text"
              name="age"
              value={user.age}
              onChange={this.handleChange}
              id="age"
            /> */}
            <TextField
              type="text"
              name="age"
              value={user.age}
              onChange={this.handleChange}
              id="age"
              placeholder="Age"
            />
            {submitted && !user.age && (
              <div style={{ color: "red" }}>Age is required</div>
            )}
            {submitted && this.state.invalidFields.includes("age") && (
              <div style={{ color: "red" }}>Age must be a number</div>
            )}
          </div>

          <div>
            {/* <input
              type="email"
              name="email1"
              value={user.email1}
              onChange={this.handleChange}
              id="email1"
            /> */}
            <TextField
              type="email"
              name="email1"
              value={user.email1}
              onChange={this.handleChange}
              id="email1"
              placeholder="Email 1"
            />
            {submitted && !user.email1 && (
              <div style={{ color: "red" }}>Email 1 is required</div>
            )}
            {submitted && this.state.invalidFields.includes("email1") && (
              <div>Email is invalid</div>
            )}
          </div>

          <div>
            {/* <input
              type="email"
              name="email2"
              value={user.email2}
              onChange={this.handleChange}
              id="email2"
            /> */}
            <TextField
              type="email"
              name="email2"
              value={user.email2}
              onChange={this.handleChange}
              id="email2"
              placeholder="Email 2"
            />
            {submitted && !user.email2 && (
              <div style={{ color: "red" }}>Email 2 is required</div>
            )}
            {submitted && this.state.invalidFields.includes("email2") && (
              <div>Email is invalid</div>
            )}
          </div>

          <div>
            {/* <input
              type="text"
              name="phone"
              value={user.phone}
              onChange={this.handleChange}
              id="phone"
            /> */}
            <TextField
              type="text"
              name="phone"
              value={user.phone}
              onChange={this.handleChange}
              id="phone"
              placeholder="Phone"
            />
            {submitted && !user.phone && (
              <div style={{ color: "red" }}>Phone is required</div>
            )}
            {submitted && this.state.invalidFields.includes("phone") && (
              <div>Phone must be a number</div>
            )}
          </div>
          <br />
          <div>
            <label htmlFor="city">City</label>
            <select
              name="city"
              id="city"
              value={user.city}
              onChange={this.handleChange}
            >
              <option value="">Select</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
            </select>

            {submitted && !user.city && (
              <div style={{ color: "red" }}>City is required</div>
            )}
          </div>
          {/* <button type="submit">Submit</button> */}
          <Button
            className="button_style"
            variant="contained"
            color="primary"
            size="small"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default Form;
