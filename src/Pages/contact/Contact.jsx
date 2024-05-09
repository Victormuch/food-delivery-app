import React, { useState } from "react";

const Contact = () => {
  const [formInfo, setFormInfo] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formInfo);
    alert("Form Submitted! We will get in touch with you")

    setFormInfo({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <form style={{ width: "400px", margin: "0 auto" }}>
      <div className="mb-3">
        <label htmlFor="exampleInputName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputName"
          aria-describedby="nameHelp"
          value={formInfo.name}
          onChange={handleChange}
          name="name"
          style={{
            width: "100%",
            height: "40px",
            fontSize: "16px",
            borderRadius: "8px",
          }}
        />
        <label htmlFor="exampleInputEmail" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail"
          aria-describedby="emailHelp"
          value={formInfo.email}
          onChange={handleChange}
          name="email"
          style={{
            width: "100%",
            height: "40px",
            fontSize: "16px",
            borderRadius: "8px",
          }}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          value={formInfo.password}
          onChange={handleChange}
          name="password"
          style={{
            width: "100%",
            height: "40px",
            fontSize: "16px",
            borderRadius: "8px",
          }}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" htmlFor="exampleCheck1">
          Check me out
        </label>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        onClick={handleSubmit}
        style={{
          width: "200px",
          height: "40px",
          fontSize: "16px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Submit
      </button>
    </form>
  );
};
export default Contact;
