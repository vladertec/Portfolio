"use client";

import { useInView } from "react-intersection-observer";
import { useState } from "react";

const ContactPage = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [status, setStatus] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formValues.name) newErrors.name = "Name is required";
    if (!formValues.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formValues.email))
      newErrors.email = "Invalid email address";

    if (!formValues.phone) newErrors.phone = "Phone number is required";
    if (!formValues.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus("Sending...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormValues({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus("Error sending message.");
      }
    } catch (error) {
      setStatus("Error sending message.");
    }
  };

  return (
    <div ref={ref} className={`contact ${inView ? "visible" : ""}`}>
      <h1 className="contact__title">SEND ME MESSAGE</h1>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__field contact__field--name">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="contact__input"
            value={formValues.name}
            onChange={handleChange}
          />
          {errors.name && <div className="contact__error">{errors.name}</div>}
        </div>
        <div className="contact__field contact__field--email">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact__input"
            value={formValues.email}
            onChange={handleChange}
          />
          {errors.email && <div className="contact__error">{errors.email}</div>}
        </div>
        <div className="contact__field contact__field--phone">
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            className="contact__input"
            value={formValues.phone}
            onChange={handleChange}
          />
          {errors.phone && <div className="contact__error">{errors.phone}</div>}
        </div>
        <div className="contact__field contact__field--message">
          <textarea
            name="message"
            placeholder="Your Message"
            className="contact__input contact__input--textarea"
            value={formValues.message}
            onChange={handleChange}
          />
          {errors.message && <div className="contact__error">{errors.message}</div>}
        </div>
        <button type="submit" className="contact__button">
          SEND MESSAGE
        </button>
      </form>
      <p className="contact__status">{status}</p>
    </div>
  );
};

export default ContactPage;
