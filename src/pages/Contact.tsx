import { useState } from "react";
import contactStyle from "./Contact.module.css";

const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      console.log("Submitted:", { name, email, message });
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className={contactStyle.contactPage}>
      <div className={contactStyle.contactInfo}>
        <h2>Contact Information</h2>
        <p>Address: Storgata 1, Oslo</p>
        <p>Phone: +47 40506070</p>
        <p>
          Email: <a href="mailto:info@javazone.no">info@javazone.no</a>
        </p>
      </div>
      {submitted ? (
        <p className={contactStyle.thankYou}>Thank you for reaching out! We'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className={contactStyle.contactForm}>
          <label>
            Name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label>
            Message:
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
          </label>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
