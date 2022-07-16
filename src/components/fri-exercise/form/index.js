import React, { Component } from "react";
import "./index.css";

const course = {
  core: [
    "javascripting",
    "git-it",
    "Scope Chains & Closures",
    "Elementary Electron",
    "learnyounode",
    "How to npm",
    "stream-adventure",
    "how-to-markdown",
  ],
  electives: [
    "Functional Javascript",
    "Level Me Up Scotty!",
    "ExpressWorks",
    "Make Me Hapi",
    "Promise It Won't Hurt",
    "Async You",
    "NodeBot Workshop",
    "Going Native",
    "Planet Proto",
    "WebGLWorkshop",
    "ESNext Generation",
    "Test Anything",
    "Tower of babel",
    "learnyoumongo",
    "regex-adventure",
    "learn-sass",
    "Pattern Lab Workshop",
    "learnyoubash",
    "Currying inJavaScript",
    "Shader School",
    "Bytewiser",
    "Bug Clinic",
    "Browserify Adventure",
    "Intro toWebGL",
    "Count to 6",
    "Kick off Koa",
    "LololoDash",
    "learnyoucouchdb",
    "learnuv",
    "LearnGenerators",
    "learnyoureact",
    "perfschool",
    "Web Audio School",
    "torrential",
    "Thinking inReact",
    "Post-mortem debugging",
    "Seneca in practice",
    "LESS is more",
  ],
};

let defaultError = true;
class Form extends Component {
  state = {
    name: "",
    email: "",
    department: null,
    course: null,
    departmentList: course,
    courseList: null,
    nameError: "",
    emailError: "",
    departmentError: "",
    people: [
      {
        name: "potato",
        email: "potato@gmail.com",
        department: "core",
        course: "javaScripting",
      },
    ],
  };

  componentDidMount() {
    defaultError = false;
  }
  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value }, this.validate);
  };

  validate = () => {
    this.validateName();
    this.validateEmail();
    this.validateDepartment();
  };
  validateName = () => {
    const { name } = this.state;
    console.log(name);
    if (name === "") {
      this.setState({ nameError: "Name is Required!" });
      console.log(name);
    } else if (new RegExp("[0-9]").test(name)) {
      this.setState({ nameError: "Invalid Name!" });
    } else {
      this.setState({ nameError: "" });
    }
  };

  validateEmail = () => {
    const { email } = this.state;
    if (email === "") {
      this.setState({ emailError: "Email is Required!" });
    } else if (!email.includes("@")) {
      this.setState({ emailError: "Invalid email" });
    } else {
      this.setState({ emailError: "" });
    }
  };

  validateDepartment = () => {
    const { department } = this.state;
    if (department === "") {
      this.setState({ departmentError: "Department is Required!" });
    } else {
      this.setState({ departmentError: "" });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, department, course } = this.state;
    this.setState({
      people: [...this.state.people, { name, email, department, course }],
    });
  };

  handleDepartment = (departmentValue) => {
    this.setState({ department: departmentValue });
    this.state.departmentList.find((department) => console.log(department));
    // setState.courseList by find department
  };

  render() {
    const { name, email, department, nameError, emailError, departmentError } =
      this.state;
    const isValid =
      nameError === "" && emailError === "" && departmentError === "";
    console.log(nameError);
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <h3>Sign Up Sheet</h3>
        <div className="name input-group">
          <label htmlFor="">Name</label>
          <input
            name="name"
            value={name}
            type="text"
            onChange={this.handleChange}
          />
          <span className="error-message">*</span>
        </div>
        <div className="error-message">{nameError}</div>

        <div className="email input-group">
          <label htmlFor="">Email</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
          />
          <span className="error-message">*</span>
        </div>
        <div className="error-message">{emailError}</div>
        <div className="department input-group">
          <label htmlFor="">Department</label>
          <select name="department" value={department} id="">
            <option value="" disabled selected>
              Selected
            </option>
            {Object.keys(this.state.departmentList).map((item, index) => (
              <option value={item} onChange={() => this.handleDepartment(item)}>
                {item}
              </option>
            ))}
          </select>
          <span className="error-message">*</span>
        </div>
        <div>
          {this.state.courseList.length ? (
            <>
              <label>Course</label>
              <select value={this.state.department}>
                {this.state.courseList.map((item, index) => (
                  <option
                    key={index}
                    value={item}
                    onChange={() => this.handleDepartment(item)}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </>
          ) : null}
        </div>

        <div className="error-message">{departmentError}</div>
        <input
          className="button"
          type="submit"
          value="Submit Form"
          onClick={this.handleAddItem}
          disabled={!isValid || defaultError}
        />

        <div>
          <p>People</p>
          {this.state.people.map((item, index) => (
            <div key={index}>{`name: ${item.name} , email: ${
              item.email
            } , department: ${item.department || "-"} , course: ${
              item.course || "-"
            }`}</div>
          ))}
        </div>
      </form>
    );
  }
}

export default Form;
