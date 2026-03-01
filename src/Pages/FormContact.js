
import React, { useState } from "react";

const FormContact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [message, setMessage] = useState("");

  const formHandler = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      alert("Please enter your name");
      return;
    }

    if (email.trim() === "") {
      alert("Please enter your email");
      return;
    }

    if (phone.trim() === "") {
      alert("Please enter your phone number");
      return;
    }

    if (department === "") {
      alert("Please select a department");
      return;
    }

    if (message.trim() === "") {
      alert("Please enter your message");
      return;
    }

    alert("Form submitted successfully ✅");

    // تفريغ الفورم بعد الإرسال
    setName("");
    setEmail("");
    setPhone("");
    setDepartment("");
    setMessage("");
  };

  return (
    <form onSubmit={formHandler}>
      
      <div className="form-control">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="form-control">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-control">
        <input
          type="tel"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <select
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        >
          <option value="">Select Department</option>
          <option value="one">One</option>
          <option value="two">Two</option>
          <option value="three">Three</option>
        </select>
      </div>

      <div className="form-control">
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>

      <button type="submit">Submit</button>

    </form>
  );
};

export default FormContact;