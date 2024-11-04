import React, { useState } from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>(""); 
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const submitToAPI = async () => {
    try {
      const response = await fetch("https://crudapi.co.uk/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          surname,
          email,
          message,
        }),
      });

      if (response.ok) {
        console.log("Message sent to API");
        setSubmitted(true);
        setName("");
        setSurname("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && surname && email && message) {
      submitToAPI(); 
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="contact">
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>Address: Storgata 1, Oslo</p>
        <p>Phone: +47 40506070</p>
        <p>
          Email: <a href="mailto:info@javazone.no">info@javazone.no</a>
        </p>
      </div>
      {submitted ? (
        <p className="thank-you">
          Thank you for reaching out! We'll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            Name:
            <input
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Surname:
            <input
              placeholder="Surname"
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </label>
          <label>
            Email:
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              placeholder="Your text message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
